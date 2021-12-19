import lldb
import re

# 格式化输出
def __format_output(return_obj):
   output = return_obj.GetOutput()
   return None if not output else output.replace('\n', '').replace('\r', '')

# 打印各个参数
def __print_arg(interpreter, return_obj, sequence):
    """
    打印函数的第几个参数，传入1打印第一个，以此类推
    """
    register = '$x%s' % str(sequence + 1)
    # 参数值
    interpreter.HandleCommand('po %s' % register, return_obj)
    arg_value = __format_output(return_obj)
    # 参数类型
    interpreter.HandleCommand('po [%s class]' % register, return_obj)
    arg_type: str = __format_output(return_obj)
    # 不是oc对象类型，是基本数据类型
    if not arg_type:
        interpreter.HandleCommand('p %s' % register, return_obj)
        p1 = re.compile(r'[(](.*?)[)]', re.S)  # 提取括号里面的参数类型
        arr = re.findall(p1, __format_output(return_obj))
        arg_type = arr[0]
        print("第%s个参数：【类型:%s】【值:%s】" % (sequence, arg_type, arg_value))
        return
    # 是oc对象类型，判断是不是block类型
    interpreter.HandleCommand('po (BOOL)[%s isKindOfClass: [NSBlock class]]' % register, return_obj)
    is_block = __format_output(return_obj)
    if not is_block == 'YES':  # 如果不是block
        print("第%s个参数：【类型:%s】【值:%s】" % (sequence, arg_type, arg_value))
        return
    # block的处理方式
    interpreter.HandleCommand('x/4xg %s' % register, return_obj)
    descriptor_address = __format_output(return_obj).split(' ')[-1]
    offset = 3 if 'Global' in arg_type else 5
    interpreter.HandleCommand('x/%sxg %s' % (str(offset),descriptor_address), return_obj)
    sign_address = __format_output(return_obj).split(' ')[-1]
    interpreter.HandleCommand('x/s %s' % sign_address, return_obj)
    sign = __format_output(return_obj).split(' ')[1]
    print("第%s个参数：【类型:%s】【签名:%s】" % (sequence, arg_type, sign))


# 定义打印参数的函数
def objargs_func(debugger, command, exe_ctx, result, internal_dict):
    """
    人性化的方式打印objc_msgSend的各个参数
    """
    interpreter = debugger.GetCommandInterpreter()
    # 保存结果
    return_obj = lldb.SBCommandReturnObject()
    # 处理命令
    interpreter.HandleCommand('po $x0', return_obj)
    print("方法调用者：%s" % __format_output(return_obj))
    interpreter.HandleCommand('x/s $x1', return_obj)
    method_name: str = __format_output(return_obj).split(' ')[1][1:-1]
    print("方法名:\t    %s" % method_name)
    args = method_name.split(':')[:-1]
    if not len(args):  # 如果没有参数
        return
    for index, arg in enumerate(args):
        sequence = index + 1
        __print_arg(interpreter, return_obj, sequence)


def __lldb_init_module(debugger, internal_dict):
         
    debugger.HandleCommand('command script add -f Debug.objargs_func objargs')
    debugger.HandleCommand('command script add -f Debug.__format_output objarg')
