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

// ts中可以使用 => 来规定函数的接受值与返回值，如
let l: (n1: number, n2: number) => number
//上面规定了l是一个接受两个number返回一个number
l = function (a: number, b: number){
    return a + b
}
//ts中声明数组的方式如下
let m: Array<number>
let n: string[]

//元组是一种特殊的数组，它规定了存储固定数量的元素，并且每个元素类型是已知的且可以不同
//?表示可选项，...类型[]表示任意多个
let o: [string, number, ...string[]]
o = ["asd",12]
o = ["asd",12,"asd","ad"]

//枚举可以定义一组常量，增强代码可读性，易维护
//枚举命名习惯首字母大写
enum Direction {
    Up,
    Right,
    Down,
    Left
}
let p: (direction:Direction) => string
p = function (a){
    if (a == Direction.Up){
        return "上"
    }
    if (a == Direction.Right){
        return "右"
    }
    if (a == Direction.Down){
        return "下"
    }
    if (a == Direction.Left){
        return "左"
    }
    return "未知"
}
p(Direction.Up)

//定义枚举时还可以定义常量枚举，避免生成js代码时生成冗余代码
const enum q {
    West,
    East,
    North,
    South
}

//允许使用type来定义一种自定义的类型，使用管道符｜来构成联合数据类型
type Status = number | string
function r(data: Status){
    console.log(data)
}
r(123)
r("abc")
//上面在规定函数接受返回值时void严格执行，但在使用类型定义来声明时，不会严格要求返回值为void

//类和继承 in ts
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    speak():string{
        return `我是${this.name}`
    }
}
class Student extends Person {
    grade: number
    constructor(name: string,age:number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
    override speak(): string {
        return `我是${this.name}，我是学生`
    }
}
//ts中具有属性修饰符
//public 可被类内部，子类，类外部访问
//protect 可被类内部，子类访问
//private 可被类内部访问
//readonly 属性不可修改

//上面的可以进行简写
class PersonSimple {
    constructor(public name: string, public age: number) {}
    speak(){
        return `我是${this.name}`
    }
}

//ts中可以定义抽象类，来便于其派生类继承
abstract class Box {
    constructor(public weight: number) {}
    abstract cal():number
}
class GoldBox extends Box {
    cal(): number {
        return 8888;
    }
}

//ts中可以定义接口，不能包含任何实现
interface animalInterface {
    name: string
    age: number
    speak: () => void
}

class dog implements animalInterface{
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    speak(){}
}
//ts中的接口可以作为类型使用
//泛型
//泛型允许在定义时使用类型参数表示未指定的类型，让一段代码适用于多个类型，同时仍然保持类型的安全性
//<T>,T可以是任何，常用T（Type类型）
function s<T>(data: T){
    console.log(data)
}
s<number>(123)
s<string>("abc")
