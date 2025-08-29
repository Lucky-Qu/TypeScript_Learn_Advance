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
//object类型，可以存储非基本类型,如对象
let h: object
h = {}
//Object类型，可以存储一切能调用Object方法的类型(存不了null和object)
let i: Object

//在实际开发中，使用ts声明对象通常采取以下方式
//在属性名后跟?表示这个是可选项
let j: {
    name: string
    age?: number
}
j = {name: "Lucky", age: 1}
j = {name: "Lucky"}
//可以使用索引签名来增加属性
let k: {
    name: string
    //表示的意思是：有一个字符串类型的索引，存储值为string，key可以是任何字符，常用key或index
    [key: string]: string
}
k = {name: "Lucky", hobby: "game", gender: "male"}