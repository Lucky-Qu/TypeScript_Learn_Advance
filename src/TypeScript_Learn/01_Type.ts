//在ts中，对于变量要进行显式声明
let a: number = 0
let b: string = "Lucky"
let c: boolean = false
//any类型可以接受任何值，也可以给任何类型赋值
let d: any = 123
//unknown类型可以理解成一个类型安全的any类型，不能给任何类型赋值
//将unknown类型赋值给其他类型有以下方法
//类型判断
let e: unknown
e = "here"
if (typeof e === "string"){
    b = e
}
//断言
b = e as string
//断言的另一种写法
b = <string> e
//never类型，一般用于函数的返回值，表示这个函数不能返回任何值，即不能正常调用结束（正常调用结束会返回undefined）
function f ():never{
    throw Error()
}
//void类型，一般用于函数的返回值，返回值为空即不返回值，undefined是被接受的空
function g() :void{

}
