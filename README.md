[TOC]


# 写在前面

## 文章简介

本文适用于程序猿👨‍💻或者有兴趣从事Java相关工作的人群 .

阅读前建议掌握 Java 基本语法，对面向对象, Java 有基本了解.

如果您想要学习Java基础或者想要复习Java基础。相信整理完后的这篇文章是您的不二之选. 

文章中内容大多数并非原创,而是整理知识点.
原因:

1. 因为Java语言被使用这么多年.显然已经非常成熟.Java文章, Java相关的视频、相关资料、教程在网络上随处可见. 
2. 因为本人学习Java时间也不多👨‍🎓, 个人的能力有限.故 借鉴了许多前辈写的Java文章,查阅Java相关资料.在这基础上进行 摘抄, 整理, 修注.文章中使用到的大部分知识点都放到了 **[相关链接](#相关链接)** 里. 大家可自行查阅。

写这篇文章的目的,纯粹是为了方便复习Java.因为Java的知识点实在太多了,而且都是零零散散的。把知识点收集起来会看起来方便一点。

因大多数知识点摘自网络,如果侵犯了您的权益.请及时联系,我会在第一时间进行删除.

本人能力有限 整理的知识点肯定多少会有不足之处，请路过的各位开发者们多多指点。
如果有意见或者建议,请在评论留言或者私信发送到我的邮箱 whiteppure@gmail.com
整理不易，多多包涵。

希望这篇文章能够帮助到您.

持续整理知识点参考列表
- [x] 数据类型篇
- [x] 运算篇
- [ ] 面向对象篇
- [ ] Object类篇
- [ ] 关键字篇
- [ ] 反射篇
- [ ] 异常篇
- [ ] 泛型篇
- [ ] IO篇
- [ ] 注解篇

Java小白 知识点的搬运工.随着以后对Java的学习,持续整理更新 中  .....🖊

## 相关链接

### 网站
- 哔哩哔哩: https://bilibili.com
- w3cschool菜鸟教程：https://www.runoob.com/java/java-tutorial.html
- JavaSchool: http://www.51gjie.com/
- php中文网：https://www.php.cn/
- Java工程师成神之路：
    - http://hollischuang.gitee.io/tobetopjavaer/#/
    - http://hollischuang.github.io/tobetopjavaer/#/
- CyC2018：http://www.cyc2018.xyz/
- JavaSE官方文档：
    - https://docs.oracle.com/en/java/javase/index.html
    - https://docs.oracle.com/javase/specs/
- IBM developer：https://developer.ibm.com/zh/

### 博客
- 链接: http://www.ruanyifeng.com/blog/
- 链接: https://www.hollischuang.com/
- 链接：https://blog.csdn.net/LoveLion/article/details/17517213
- 链接：https://blog.csdn.net/cui_yonghua/article/details/90512943
- 链接：https://design-patterns.readthedocs.io/zh_CN/latest/index.html

### 工具
jad反编译工具: 
- http://www.kpdus.com/jad.html#download
- https://varaneckas.com/jad/

# 数据类型

## 基本类型
Java语言提供了八种基本类型。六种数值类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型.  **俗称4类8种**


这里只介绍称4类8种.实际上，JAVA中还存在另外一种基本类型 void，它也有对应的包装类`java.lang.Void`，不过我们无法直接对它们进行操作.

> 一个Byte(字节)等于8个bit(位),bit是最小的单位,1B(字节)=8bit(位). <br>
一般情况下，一个汉字是两个字节，英文与数字是一个字节

### 数值类型

#### 整型
- byte/8
    - byte 数据类型是8位、有符号的，以二进制补码表示的整数;
    - 最小值是 `-128（-2^7)`
    - 最大值是 `127（2^7-1）`
    - 默认值是 0
    - byte 类型用在大型数组中节约空间，主要代替整数，因为byte变量占用的空间只有int类型的四分之一
    - 例子：`byte a = 100，byte b = -50`


- short/16
    - short 数据类型是16位、有符号的以二进制补码表示的整数
    - 最小值是 `-32768（-2^15）`
    - 最大值是 `32767（2^15 - 1）`
    - Short 数据类型也可以像byte那样节省空间.一个short变量是int型变量所占空间的二分之一
    - 默认值是 0
    - 例子：`short s = 1000，short r = -20000`


- int/32
    - int 数据类型是32位、有符号的以二进制补码表示的整数
    - 最小值是 `-2,147,483,648（-2^31）`
    - 最大值是 `2,147,483,647（2^31 - 1）`
    - 一般地整型变量默认为 int 类型
    - 默认值是 0 
    - 例子：`int a = 100000, int b = -200000`


- long/64
    - long 数据类型是 64 位、有符号的以二进制补码表示的整数
    - 最小值是 `-9,223,372,036,854,775,808（-2^63）`
    - 最大值是 `9,223,372,036,854,775,807（2^63 -1）`
    - 这种类型主要使用在需要比较大整数的系统上
    - 默认值是 `0L`
    - 例子： `long a = 100000L，Long b = -200000L`

#### 浮点型
- float/32
    - float 数据类型是单精度32位.符合IEEE 754标准的浮点数
    - float 在储存大型浮点数组的时候可节省内存空间
    - 最小值`1.4E-45`,最大值`3.4028235E38`
    - 默认值是` 0.0f`
    - 浮点数不能用来表示精确的值，如货币
    - 例子：`float f = 234.5f`


- double/64
    - double 数据类型是双精度、64位、符合IEEE754标准的浮点数
    - 浮点数的默认类型为double类型
    - double类型同样不能表示精确的值，如货币
    - 最小值`4.9E-324`,最大值`1.7976931348623157E308`
    - 默认值是 `0.0d`
    - 例子：`double d = 123.4`

`Float`和`Double`的最小值和最大值都是以科学记数法的形式输出的，结尾的"E+数字"表示E之前的数字要乘以10的多少次方.比如`3.14E3`就是`3.14 × 10^3 =3140`，`3.14E-3` 就是 `3.14 x 10^-3 =0.00314`.

### 字符类型
- char/16
    - char类型是一个单一的 16 位 Unicode 字符
    - 最小值是 `\u0000`（即为 0）
    - 最大值是 `\uffff`（即为65、535）
    - 默认值是 `\u0000`
    - char 数据类型可以储存任何字符
    - 例子：`char letter = 'A'`

### 布尔类型
- boolean/~
    - boolean数据类型表示一位的信息
    - 只有两个取值：true 和 false
    - 这种类型只作为一种标志来记录 true/false 情况
    - 默认值是 `false`
    - 例子：`boolean one = true`


boolean 只有两个值：`true、false`，可以使用 1 bit 来存储，但是具体大小没有明确规定。**JVM 会在编译时期将 boolean 类型的数据转换为 int，使用 1 来表示 true，0 表示 false。JVM 支持 boolean 数组，但是是通过读写 byte 数组来实现的。**


## 类型转换

**整型、实型（常量）、字符型数据可以混合运算。运算中，不同类型的数据先转化为同一类型，然后进行运算。**

转换从低级到高级。

```java
byte,short,char,int,long,float,double
```

数据类型转换必须满足如下规则：

- 不能对boolean类型进行类型转换。

- 不能把对象类型转换成不相关类的对象。

- 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。

- 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入

  ```java
  (int)23.7 == 23;        
  (int)-45.89f == -45
  ```

- 转换过程中可能导致溢出或损失精度,在运算时要避免该问题.例如：

  ```java
  // 因为 byte 类型是 8 位，最大值为127，所以当 int 强制转换为 byte 类型时，值 128 时候就会导致溢出
  int i =128;   
  byte b = (byte)i;
  ```

### 自动类型转换

自动类型转换必须满足**转换前的数据类型的位数要低于转换后的数据类型**. 即可以 `long l = 100;`而不可以`int l = 100L;`

```java
public class Test{
        public static void main(String[] args){
            char c1='a';//定义一个char类型
            int i1 = c1;//char自动类型转换为int
            System.out.println("char自动类型转换为int后的值等于"+i1);
            char c2 = 'A';//定义一个char类型
            int i2 = c2+1;//char 类型和 int 类型计算
            System.out.println("char类型和int计算后的值等于"+i2);
        }
}
// 结果:
// char自动类型转换为int后的值等于97
// char类型和int计算后的值等于66
```



### 隐式类型转换

**Java 不能隐式执行向下转型，因为这会使得精度降低。**

`1.1 `字面量属于 `double` 类型，不能直接将 `1.1 `直接赋值给 `float `变量，因为这是向下转型。

```java
float f = 1.1;
```

`1.1f` 字面量才是 float 类型。

```java
float f = 1.1f;
```

因为字面量 1 是 int 类型，它比 short 类型精度要高，因此不能隐式地将 int 类型下转型为 short 类型。

```java
short s1 = 1;
s1 = s1 + 1;
```

但是使用 += 或者 ++ 运算符可以执行隐式类型转换。

```java
s1 += 1;
s1++;
```

上面的语句相当于将 ``s1 + 1`` 的计算结果进行了向下转型：

```java
//强制类型转换
s1 = (short) (s1 + 1);
```

简而言之,不能够直接的将精度高的类型 直接的赋值给精度低的类型.如: ``float f = 1.1; short s = 1;`` 如果想要赋值可用Java的隐式类型转换 如:``float f+=1.1; s += 1;``

**由大到小需要强制转换,由小到大不需要强转.  顺序:`byte , short , char , int ,long,float,double`**

```java
byte b=1; int a = b;//由小到大
int c = 1;
byte d = (byte) c;//由大到小
```


## 包装类型


| 基本数据类型 | 包装类    |
| ------------ | --------- |
| byte         | Byte      |
| boolean      | Boolean   |
| short        | Short     |
| char         | Character |
| int          | Integer   |
| long         | Long      |
| float        | Float     |
| double       | Double    |

在这八个类名中，除了 `Integer` 和 `Character` 类以后，其它六个类的类名和基本数据类型一致，只是类名的第一个字母大写即可.

```
graph TD
Object-->Number

Number-->Byte
Number-->Short
Number-->Integer
Number-->Long
Number-->Float
Number-->Double

Object-->Boolean
Object-->Character

```

`Integer、Long、Byte、Double、Float、Short`都是抽象类`Number`的子类.

因为 Java 是一种面向对象语言，很多地方都需要使用对象而不是基本数据类型。比如，在集合类中，我们是无法将` int 、double` 等类型放进去的。因为集合的容器要求元素是 `Object` 类型.所以才有了对应基本类型分包装类型.

### 拆箱与装箱
基本类型都有对应的包装类型，基本类型与其对应的包装类型之间的赋值使用自动装箱与拆箱完成。

以`Integer int` 为例

```java
Integer x = 2;     // 装箱 调用了 Integer.valueOf(2)
int y = x;         // 拆箱 调用了 X.intValue()
```

#### 自动拆装箱

自动装箱: 就是将基本数据类型自动转换成对应的包装类.

自动拆箱：就是将包装类自动转换成对应的基本数据类型.
```java
    Integer i = 10;  //自动装箱
    int b = i;     //自动拆箱
```
反编译得
```java
    public static  void main(String[]args){
        Integer integer=Integer.valueOf(1);
        int i=integer.intValue();
    }
```
`int`的自动装箱都是通过` Integer.valueOf()` 方法来实现的，Integer 的自动拆箱都是通过 `integer.intValue` 来实现的

> 自动装箱都是通过包装类的 `valueOf()` 方法来实现的.自动拆箱都是通过包装类对象的 `xxxValue() `来实现的。

#### 自动拆装箱带来的问题
- **比较**
包装对象的数值比较,不能简单的使用`==`,虽然 -128 到 127 之间的数字可以,但是这个范围之外还是需要使用 `equals`方法进行比较.


- **NPE**
因为有自动拆箱的机制，如果初始的包装类型对象为`null`，那么在自动拆箱的时候的就会报`NullPointerException`，在使用时需要格外注意.


- **内存浪费**
如果一个 for 循环中有大量拆装箱操作，会浪费很多资源


### 缓存池

案例: **``new Integer(123) ``与 ``Integer.valueOf(123)`` 的区别在于：**

- ``new Integer(123)`` 每次都会新建一个对象；
- ``Integer.valueOf(123)`` 会使用缓存池中的对象，多次调用会取得同一个对象的引用

```java
Integer x = new Integer(123);
Integer y = new Integer(123);
System.out.println(x == y);    // false
Integer z = Integer.valueOf(123);
Integer k = Integer.valueOf(123);
System.out.println(z == k);   // true
```

``valueOf()`` 方法的实现比较简单，就是先判断值是否在缓存池中，如果在的话就直接返回缓存池的内容

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

**在 Java 8 中，Integer 缓存池的大小默认为 -128~127**

```java
static final int low = -128;
static final int high;
static final Integer cache[];

static {
    // high value may be configured by property
    int h = 127;
    String integerCacheHighPropValue =
        sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
    if (integerCacheHighPropValue != null) {
        try {
            int i = parseInt(integerCacheHighPropValue);
            i = Math.max(i, 127);
            // Maximum array size is Integer.MAX_VALUE
            h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
        } catch( NumberFormatException nfe) {
            // If the property cannot be parsed into an int, ignore it.
        }
    }
    high = h;

    cache = new Integer[(high - low) + 1];
    int j = low;
    for(int k = 0; k < cache.length; k++)
        cache[k] = new Integer(j++);

    // range [-128, 127] must be interned (JLS7 5.1.7)
    assert IntegerCache.high >= 127;
}
```

**编译器会在自动装箱过程调用 ``valueOf()`` 方法，因此多个值相同且值在缓存池范围内的 Integer 实例使用自动装箱来创建，那么就会引用相同的对象。**

```java
Integer m = 123;
Integer n = 123;
System.out.println(m == n); // true
```

`Integer,int `在 `-127~128`之前是不会创建新的对象的,即

```java
 Integer a = new Integer(12);
 int b = 12;
 System.out.println(a==b);//true
```

`Integer`和`int`自动装箱拆箱会通过`valueOf()`方法实现,当这个数在-127~128之间直接从缓存里边取,不会重新new对象

**基本类型对应的缓冲池如下：**

- ``boolean values true and false``
- ``all byte values``
- ``short values between -128 and 127``
- ``int values between -128 and 127``
- ``char in the range \u0000 to \u007F``

在使用这些基本类型对应的包装类型时，如果该数值范围在缓冲池范围内，就可以直接使用缓冲池中的对象。==两种浮点数类型的包装类Float,Double并没有实现常量池技术。==

> 在 JDK 1.8 所有的数值类缓冲池中，Integer 的缓冲池`` IntegerCache`` 很特殊，这个缓冲池的下界是 - 128，上界默认是 127,但是这个上界是可调的:<br>在启动JVM的时候，通过``-XX:AutoBoxCacheMax=<size>``来指定这个缓冲池的大小,该选项在 JVM 初始化的时候会设定一个名为 ``java.lang.IntegerCache.high`` 系统属性,然后 ``IntegerCache``初始化的时候就会读取该系统属性来决定上界。 



## 引用类型

- 类
- 数组类型
- 接口类型
- 注解类型
- 枚举类型

引用类型指向一个对象(类似于C的指针),指向对象的变量是引用变量

所有引用类型的默认值都是`null`


### 与基本类型区别

1. 基本数据类型在被创建时,在栈中直接划分一块内存,将数值直接存入栈中,引用数据类型再被创建时,先在堆中开辟内存创建存放值,然后引用到栈中的是在堆中的地址值


2. 传递参数的时候不同.基本数据类型是值传递,引用数据类型是引用传递.

### 注意事项
- `String`类是引用类型,不是基本类型
- 默认`double`类型，如果`float`加后缀F(不区分大小写).如果`long`类型加后缀L(不区分大小写)
- 浮点数可能是个近似值,不是精确值.如果想要表示精确用`BigDecimal`类型


## 常量

案例: Java中常量,变量和字面量
```java
int a = 10; //a为变量，10为字面量
final int b = 10;  //b为常量，10为字面量
static str = "Hello World";  //str为变量,HelloWorld为字面量
```
- 常量：程序运行中，固定不变的量.
- 变量：值可以修改的数据类型。
- 字面量：字面量就是数据，是由字母、数字等构成的字符串或者数值，如30（整型）、3.15（浮点型）、“我是字符串”（字符串型）、‘中’（字符型）、true（布尔型）、false（布尔型）等,只能作为右值出现如`int a = 10`;这里的a是左值,10为右值.


字面量

> 在计算机科学中，字面量（literal）是用于表达源代码中一个固定值的表示法（notation）。几乎所有计算机编程语言都具有对基本值的字面量表示，诸如：整数、浮点数以及字符串；而有很多也对布尔类型和字符类型的值也支持字面量表示；还有一些甚至对枚举类型的元素以及像数组、记录和对象等复合类型的值也支持字面量表示法。

Java常量

> JAVA常量就是在程序运行过程中一直不会改变的量的量称为常量.常量在整个程序中只能被赋值一次.

常量简单理解为`final`修饰的变量


### 定义
在 Java 中使用`final`关键字来修饰常量，声明方式和变量类似

要声明一个常量，第一需要制定数据类型，第二需要通过`final`关键字进行限定
格式：`final 数据类型 常量名称[=值]`

**常量在程序运行时是不能被修改的(final作用).所以在定义常量时就需要对该常量进行初始化.为了与变量区别，常量取名一般都用大写字符**
```java
final double PI = 3.1415927;
```
`final` 关键字表示最终的，它可以修改很多元素，修饰变量就变成了常量.之后会详细说明`final`关键字
```java
public class HelloWorld {
    // 静态常量
    public static final double PI = 3.14;
    // 声明成员常量
    final int y = 10;
    public static void main(String[] args) {
        // 声明局部常量
        final double x = 3.3;
    }
}
```

### 常量池

在Java体系中，共用三种常量池.分别是字符串常量池、Class常量池(静态常量池)和运行时常量池.

**我们常说的常量池，就是指方法区中的运行时常量池。**


#### Class常量池


##### Class文件

> class文件全名称为Java class文件，主要在平台无关性和网络移动性方面使Java更适合网络。它在平台无关性方面的任务是：为Java程序提供独立于底层主机平台的二进制形式的服务。(会产生字节码)

> 有了字节码，无论是哪种平台（如Windows、Linux等），只要安装了虚拟机，都可以直接运行字节码。目前Java虚拟机已经可以支持很多除Java语言以外的语言了，如Groovy、JRuby、Jython、Scala等。之所以可以支持，就是因为这些语言也可以被编译成字节码。而虚拟机并不关心字节码是有哪种语言编译而来的。


将下面代码通过`javac`命令编译
```java
public class HelloWorld {
    public static void main(String[] args) {
        String s = "123";
    }
}
```
生成`.class`文件.`vi`命令查看

```class
Êþº¾^@^@^@4^@^Q
^@^D^@^M^H^@^N^G^@^O^G^@^P^A^@^F<init>^A^@^C()V^A^@^DCode^A^@^OLineNumberTable^A^@^Dmain^A^@^V([Ljava/lang/String;)V^A^@
SourceFile^A^@^OHelloWorld.java^L^@^E^@^F^A^@^C123^A^@7com/example/springboot/example/security/util/HelloWorld^A^@^Pjava/lang/Object^@!^@^C^@^D^@^@^@^@^@^B^@^A^@^E^@^F^@^A^@^G^@^@^@^]^@^A^@^A^@^@^@^E*·^@^A±^@^@^@^A^@^H^@^@^@^F^@^A^@^@^@^C^@        ^@      ^@
^@^A^@^G^@^@^@ ^@^A^@^B^@^@^@^D^R^BL±^@^@^@^A^@^H^@^@^@
^@^B^@^@^@^E^@^C^@^F^@^A^@^K^@^@^@^B^@^L
```
> 如何使用16进制打开class文件：使用 vim xxx.class ，然后在交互模式下，输入:%!xxd 即可。

```class 
00000000: cafe babe 0000 0034 0011 0a00 0400 0d08  .......4........
00000010: 000e 0700 0f07 0010 0100 063c 696e 6974  ...........<init
00000020: 3e01 0003 2829 5601 0004 436f 6465 0100  >...()V...Code..
00000030: 0f4c 696e 654e 756d 6265 7254 6162 6c65  .LineNumberTable
00000040: 0100 046d 6169 6e01 0016 285b 4c6a 6176  ...main...([Ljav
00000050: 612f 6c61 6e67 2f53 7472 696e 673b 2956  a/lang/String;)V
00000060: 0100 0a53 6f75 7263 6546 696c 6501 000f  ...SourceFile...
00000070: 4865 6c6c 6f57 6f72 6c64 2e6a 6176 610c  HelloWorld.java.
00000080: 0005 0006 0100 0331 3233 0100 3763 6f6d  .......123..7com
00000090: 2f65 7861 6d70 6c65 2f73 7072 696e 6762  /example/springb
000000a0: 6f6f 742f 6578 616d 706c 652f 7365 6375  oot/example/secu
000000b0: 7269 7479 2f75 7469 6c2f 4865 6c6c 6f57  rity/util/HelloW
000000c0: 6f72 6c64 0100 106a 6176 612f 6c61 6e67  orld...java/lang

```
> HelloWorld.class文件中的前八个字母是cafe babe，这就是Class文件的魔数（Java中的”魔数”）

```class
cafe babe   0000      0034        0011      0a00 0400 0d08
   魔数    此版本号   主版本号    常量池计数器      常量池计数区
```

> 我们需要知道的是,在Class文件的4个字节的魔数后面的分别是4个字节的Class文件的版本号（第5、6个字节是次版本号，第7、8个字节是主版本号，我生成的Class文件的版本号是52，这时Java 8对应的版本。也就是说，这个版本的字节码，在JDK 1.8以下的版本中无法运行）在版本号后面的，就是Class常量池入口了.


##### 存放内容

**常量池中主要存放两大类常量：字面量和符号引用。**
字面量前面已经记录过了,来记录下符号引用.

**符号引用**

符号引用是编译原理中的概念，是相对于直接引用来说的。主要包括了以下三类常量： **类和接口的全限定名  字段的名称和描述符 方法的名称和描述符.**

> 符号引用 ：符号引用以一组符号来描述所引用的目标。符号引用可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可，符号引用和虚拟机的布局无关。


在编译的时候每个java类都会被编译成一个class文件，但在编译的时候虚拟机并不知道所引用类的地址，所以就用符号引用来代替，而在这个==解析阶段==就是为了把这个符号引用转化成为真正的地址的阶段。

> 解析阶段:<br>
Java类从加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期包括，加载 ,验证 , 准备 , 解析 , 初始化 , 卸载 ，总共七个阶段。其中验证 ,准备 , 解析 统称为连接。<br>
而在解析阶段会有一步将常量池当中二进制数据当中的符号引用转化为直接引用的过程。<br>

 在Java编译阶段,由`.java`文件会生成`.class`文件.Class文件中除了包含类的版本、字段、方法、接口等描述信息外，还有一项信息就是常量池，用于存放编译器生成的各种字面量和符号引用。
 
 由于不同的Class文件中包含的常量的个数是不固定的，所以在Class文件的常量池入口处会设置两个字节的常量池容量计数器，记录了常量池中常量的个数。

 
 Class常量池可以理解为是Class文件中的资源仓库。
 
 class常量池是Class文件中的资源仓库，其中保存了各种常量。而这些常量都是开发者定义出来，需要在程序的运行期使用的。
 > Java代码在进行Javac编译的时候,在Class文件中不会保存各个方法、字段的最终内存布局信息，因此这些字段、方法的符号引用不经过运行期转换的话无法得到真正的内存入口地址，也就无法直接被虚拟机使用。当虚拟机运行时，需要从常量池获得对应的符号引用，再在类创建时或运行时解析、翻译到具体的内存地址之中。
 
 Class是用来保存常量的一个媒介场所，并且是一个中间场所。在JVM真的运行时，需要把常量池中的常量加载到内存中.
 


#### 运行时常量池

> 运行时常量池是每一个类或接口的常量池的运行时表示形式.<br>
<br>
> 它包括了若干种不同的常量：从编译期可知的数值字面量到必须运行期解析后才能获得的方法或字段引用。运行时常量池扮演了类似传统语言中符号表的角色，不过它存储数据范围比通常意义上的符号表要更为广泛。<br><br>
每一个运行时常量池都分配在 Java 虚拟机的方法区之中，在类和接口被加载到虚拟机后，对应的运行时常量池就被创建出来。

**简单说来就是JVM虚拟机在完成类装载操作后，将class文件中的常量池载入到内存中，并保存在方法区中，我们常说的常量池，就是指方法区中的运行时常量池。**

##### 存放位置及存放来源

在不同版本的JDK中，运行时常量池所处的位置也不一样.以`HotSpot`为例:<br/>
JDK1.7之前方法区位于堆内存中的永久代.由于一些原因在JDK1.8之后彻底祛除了永久代,用元空间代替.

存放在JVM内存模型中的==方法区==

> **根据JVM规范,JVM内存共分为虚拟机栈，堆，方法区，程序计数器，本地方法栈五个部分.**
方法区:<br>
- 被所有方法线程共享的一块内存区域.
- 用于存储已经被虚拟机加载的类信息，常量，静态变量等.
- 这个区域的内存回收目标主要针对常量池的回收和堆类型的卸载.


**运行时常量池是方法区的一部分**`.CLass`文件中除了有类的版本、字段、方法、接口等描述信息外,还有一项信息是常量池，用于存放**编译期**生成的**各种字面量和符号引用**,这部分内容将在类加载后进入方法区的运行时常量池中存放.

**运行时常量池内容包含了Class常量池中的常量和字符串常量池中的内容.**



#### String常量池

在JVM中，为了减少相同的字符串的重复创建，为了达到节省内存的目的。会单独开辟一块内存，用于保存字符串常量，这个内存区域被叫做字符串常量池.

字符串常量池保存着所有字符串字面量,这些字面量在编译时期就确定.

##### intern()

==`intern`方法作用:== 
**当一个字符串调用 ``intern()`` 方法时，如果 String Pool 中已经存在一个字符串和该字符串值相等（使用 ``equals()``方法进行确定），那么就会返回 String Pool 中字符串的引用；否则，就会在 String Pool 中添加一个新的字符串，并返回这个新字符串的引用.**

下面示例中，s1 和 s2 采用`` new String()`` 的方式新建了两个不同字符串，而 s3 和 s4 是通过 ``s1.intern()`` 方法取得一个字符串引用。``intern()`` 首先把 s1 引用的字符串放到 String Pool 中，然后返回这个字符串引用。因此 s3 和 s4 引用的是同一个字符串。

```java
String s1 = new String("aaa");
String s2 = new String("aaa");
System.out.println(s1 == s2);           // false
String s3 = s1.intern();
String s4 = s1.intern();
System.out.println(s3 == s4);           // true
```

如果是采用"bbb"这种字面量的形式创建字符串，会自动地将字符串放入 String Pool 中。

```java
String s5 = "bbb";
String s6 = "bbb";
System.out.println(s5 == s6);  // true
```

在 Java 7 之前，String Pool 被放在运行时常量池中，它属于永久代。(方法区)而在 Java 7，String Pool 被移到堆中。这是因为永久代的空间有限，在大量使用字符串的场景下会导致`OOM`(``OutOfMemoryError ``)错误。


**上面的示例说明了可以使用 String的``intern()``方法在运行过程中将字符串添加到字符串常量池中。**


##### 经典案例
String常量池常考的一个问题就是`new String("abc")`会创建几个对象?

答案: 两个字符串对象(前提是 String常量池中还没有 "abc" 字符串对象).

- "abc" 属于字符串字面量，因此编译时期会在 String 常量池 中创建一个字符串对象，指向这个 "abc" 字符串字面量;
- 而使用 new 的方式会在堆中创建一个字符串对象。

```java
// 创建一个测试类，其 main 方法中使用这种方式来创建字符串对象。
public class MainTest {
    public static void main(String[] args) {
        String s = new String("abc");
    }
}
```

使用 ``javap -verbose`` 进行反编译，得到以下内容：

```java
// ...
Constant pool:
// ...
   #2 = Class              #18            // java/lang/String
   #3 = String             #19            // abc
// ...
  #18 = Utf8               java/lang/String
  #19 = Utf8               abc
// ...

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=3, locals=2, args_size=1
         0: new           #2                  // class java/lang/String
         3: dup
         4: ldc           #3                  // String abc
         6: invokespecial #4                  // Method java/lang/String."<init>":(Ljava/lang/String;)V
         9: astore_1
// ...
```

在 ``Constant Pool`` 中，#19 存储这字符串字面量 ``"abc"``，#3 是 String Pool 的字符串对象，它指向 ``#19`` 这个字符串字面量。在 ``main`` 方法中，``0:`` 行使用 ``new #2`` 在堆中创建一个字符串对象，并且使用 ``ldc #3`` 将 String Pool 中的字符串对象作为 String 构造函数的参数。

以下是 String 构造函数的源码，可以看到，在将一个字符串对象作为另一个字符串对象的构造函数参数时，并不会完全复制 value 数组内容，而是都会指向同一个 value 数组。

```java
public String(String original) {
    this.value = original.value;
    this.hash = original.hash;
}
```

##### 优点
常量池是为了避免频繁的创建和销毁对象而影响系统性能，其实现了对象的共享.
避免了相同内容的字符串的创建，节省了内存，省去了创建相同字符串的时间，同时提升了性能.



## String 类


### 概览
String是Java中一个比较基础的类.广泛应用 在 Java 编程中，在Java中字符串属于对象，Java 提供了 String 类来创建和操作字符串.

String被声明为`final`,因此它不可被继承.(当然Integer等包装类也不能被继承)

**在 Java 8 中，String 内部使用 char 数组存储数据。**

```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
    /** The value is used for character storage. */
    private final char value[];
}
```

**在 Java 9 之后，String 类的实现改用 byte 数组存储字符串，同时使用 coder 来标识使用了哪种编码。**

```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {
    /** The value is used for character storage. */
    private final byte[] value;

    /** The identifier of the encoding used to encode the bytes in {@code value}. */
    private final byte coder;
}
```

**value数组被声明为`final`，这意味着value数组初始化之后就不能再引用其它数组。并且 String 内部没有改变 value 数组的方法，因此可以保证`String`不可变.**

String是Java中一个不可变的类，所以他一旦一个string对象在内存(堆)中被创建出来，他就无法被修改。**特别要注意的是，String类的所有方法都没有改变字符串本身的值，都是返回了一个新的对象。==字符串不可变的根本原因应是处于安全性考虑。==**

### 不可变性优点

**1. 可以缓存 hash 值**

因为`String`的`hash`值经常被使用,像`Set、Map`结构中的 key 值也需要用到`HashCode`来保证唯一性和一致性，因此不可变的 `HashCode` 才是安全可靠的

**2. String常量池的需要**

字符串常量池的基础就是字符串的不可变性，如果字符串是可变的，那想一想，常量池就没必要存在了。
如果一个 `String` 对象已经被创建过了，那么就会从`String常量池中取得引用。只有`String`是不可变的，才可能使用 String常量池。

**3. 安全性**

`String`经常作为参数,`String`不可变性可以保证参数不可变。例如在作为网络连接参数的情况下如果`String`是可变的，那么在网络连接过程中，`String`被改变，改变`String`对象的那一方以为现在连接的是其它主机,而实际情况却不一定是.

实际项目中会用到,比如数据库连接串、账号、密码等字符串，只有不可变的连接串、用户名和密码才能保证安全性.

**4. 线程安全**

字符串在 Java 中的使用频率可谓高之又高，那在高并发的情况下不可变性也使得对字符串的读写操作不用考虑多线程竞争的情况.

String不可变性天生具备线程安全,可以在多个线程中安全地使用.


### 使用

#### 创建字符串

```java
// String 直接创建
String str1 = "123";
// String 对象创建
String str2 = new String("123");
// 引用创建
String str3 = str1;
```
格式化创建字符串
```java
String str = String.format("浮点型变量: " +
                   "%f, 整型变量: " +
                   " %d, 字符串变量: " +
                   " %s", 1.0f, 1, "1");
System.out.println(str);
````
**String 直接创建的字符串存储在String常量池中，而 new 创建的字符串对象在堆上.**

#### 连接字符串
**因为String类是不可变的.所以所谓字符串拼接，都是重新生成了一个新的字符串.**

以下是字符串的几种拼接的方式
```java
// 原字符串
String str1 = "123";

//1. concat 方法连接字符串
String str2 = "123".concat("456");
System.out.println(str2);

//2. 用 "+" 连接字符串
// 在编译时会编译成 String str4 = "123456";
String str3 = "123" + "456";
// 会调用StringBuilder.append方法
String str4 = str3 + "789";
System.out.println(str3);
System.out.println(str4);

//3. 用JDK内置处理字符串类 Stringbuilder, StringBuffer
StringBuilder builder = new StringBuilder();
StringBuffer buffer = new StringBuffer();
String str5 = builder.append(str).append("456").toString();
String str6 = buffer.append(str).append("456").toString();
System.out.println(str5);
System.out.println(str6);

//4. Java8新增String.join方法连接字符串
List<String> list = new ArrayList<>();
list.add("1");
list.add("2");
list.add("3");
String str7 = String.join("-", list);
String str8 = String.join("~", new String[]{"1","2","3"}r);
System.out.println(str7);
System.out.println(str8);

//5. 用第三方处理字符串工具类. 例如: apache.commons.
String str9 = StringUtils.join(new String[]{str, "456", "789"});

// Java8提供的String.join方法和`apache.commons`方法相似.
// 主要作用是将数组或集合以某拼接符拼接到一起形成新的字符串

```
##### "+"连接字符串
拼接字符串最简单的方式就是直接使用符号+来拼接. + 是Java提供的一个语法糖.
> 语法糖：语法糖（Syntactic sugar），也译为糖衣语法，是由英国计算机科学家彼得·兰丁发明的一个术语，指计算机语言中添加的某种语法，这种语法对语言的功能没有影响，但是更方便程序员使用。语法糖让程序更加简洁，有更高的可读性。
```java
    public static void main(String[] args) {
        String str = "12" + "3";
    }
```
两个都为编译期常量,编译器会进行常量折叠变为`String str = "123";`


```java
    public static void main(String[] args) {
        String str1 = "123";
        String str2 = "456";
        String str3 = str1 + str2;
        System.out.println(str3);
    }
```
打开文件所在位置,用`javap -verbose`命令进行反编译.
```byte
// ...
  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=4, args_size=1
         0: ldc           #2                  // String 123
         2: astore_1
         3: ldc           #3                  // String 456
         5: astore_2
         6: new           #4                  // class java/lang/StringBuilder
         9: dup
        10: invokespecial #5                  // Method java/lang/StringBuilder."<init>":()V
        13: aload_1
        14: invokevirtual #6                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
        17: aload_2
        18: invokevirtual #6                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
        21: invokevirtual #7                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
        24: astore_3
        25: getstatic     #8                  // Field java/lang/System.out:Ljava/io/PrintStream;
        28: aload_3
        29: invokevirtual #9                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
        32: return
      // ...

```
**在字符串拼接过程中,是将String转成了`StringBuilder`后，使用其`append`方法进行处理的.**

##### concat方法

源码
```java
    public String concat(String str) {
        // 获取字符串长度 
        int otherLen = str.length();
        // 判空
        if (otherLen == 0) {
            return this;
        }
        // 获取已有字符串长度
        int len = value.length;
        // 创建新的字符数组.
        // 长度为:已有字符串+待拼接字符长度.
        // 将两个字符串的值复制到新的字符数组
        char buf[] = Arrays.copyOf(value, len + otherLen);
        str.getChars(buf, len);
        // 创建新的字符串对象
        return new String(buf, true);
    }
```
##### StringBuffer和StringBuilder
在`Stringbuilder`和`StringBuffer`共同的父类中
```java
abstract class AbstractStringBuilder implements Appendable, CharSequence {
    /**
     * The value is used for character storage.
     */
    char[] value;

    /**
     * The count is the number of characters used.
     */
    int count;

    // ...
}
```
用于存贮的`value`并没有用`final`修饰,说明是可以修改的.还有一个属性字段`count`,用来保存数组中已经使用的字符个数.

**append方法**

`StringBuilder.append`方法
```java
    @Override
    public StringBuilder append(String str) {
        super.append(str);
        return this;
    }
```
`StringBuffer.append`方法
```java
    @Override
    public synchronized StringBuffer append(String str) {
        toStringCache = null;
        super.append(str);
        return this;
    }
```
由此可以看出`StringBuilder`和`StringBuffer`原理是相似的,最大的区别就是`StringBuffer`是线程安全的.原因是用了`synchronized`修饰.

`append`方法原理的在父类中.需要注意的是,如果`append`方法`append(null)`会直接拼接字符串"null"
```java
    public AbstractStringBuilder append(String str) {
        // 判空
        if (str == null)
            /**
             * final char[] value = this.value;
             * value[c++] = 'n';
             * value[c++] = 'u';
             * value[c++] = 'l';
             * value[c++] = 'l';
             */
           // 如果是'null' 则返回 字符串 "null"
            return appendNull();
        // 获取字符长度
        int len = str.length();
        /**  if (count + len - value.length > 0) {
                // 拷贝字符到内部的字符数组中.如果字符数组长度不够，会进行扩展
                value = Arrays.copyOf(value,newCapacity(count+len));
             }
        **/
        ensureCapacityInternal(count + len);
        // 复制数组
        // System.arraycopy(value, srcBegin, dst, dstBegin, srcEnd - srcBegin);
        str.getChars(0, len, value, count);
        // 拼接字符长度
        count += len;
        return this;
    }
```



和 String 类不同的是，`StringBuffer` 和 `StringBuilder` 类的对象能够被多次的修改，并且不产生新的未使用对象。

如果你需要一个可修改的字符串，应该使用`StringBuffer` 或者 `StringBuilder`。否则会有大量时间浪费在垃圾回收上，因为每次试图修改都有新的`String`对象被创建出来.

##### 比较和使用

时间比较(短-->长):

`StringBuilder`<`StringBuffer`<`concat`<`+`<`StringUtils.join`

使用注意:

- 如果不是在**循环体中**进行字符串拼接的话,直接使用+就好了,如果在循环体内使用"+"拼接字符串对象会在每一次循环都会创建`StringBuilder`对象,导致程序效率降低.


- 如果在并发场景中进行字符串拼接的话,要使用`StringBuffer`来代替`StringBuilder`.

#### 常用方法

本文是基于Java8整理的.
如果查看其他方法请参照[Java8API官方文档](https://docs.oracle.com/javase/8/docs/api/index.html) `java.lang.String`

##### substring
对字符串进行截取.返回一个新的字符串,它是此字符串的一个子字符串.

源码
```java
    public String substring(int beginIndex) {
        // 判空
        if (beginIndex < 0) {
            throw new StringIndexOutOfBoundsException(beginIndex);
        }
        // 需要截取的长度不能超过源字符的长度
        int subLen = value.length - beginIndex;
        if (subLen < 0) {
            throw new StringIndexOutOfBoundsException(subLen);
        }
        // 如果传入的长度不等于被截字符串的长度 则创建新的字符串
        return (beginIndex == 0) ? this : new String(value, beginIndex, subLen);
    }
    
    public String substring(int beginIndex, int endIndex) {
        if (beginIndex < 0) {
            throw new StringIndexOutOfBoundsException(beginIndex);
        }
        if (endIndex > value.length) {
            throw new StringIndexOutOfBoundsException(endIndex);
        }
        int subLen = endIndex - beginIndex;
        if (subLen < 0) {
            throw new StringIndexOutOfBoundsException(subLen);
        }
        return ((beginIndex == 0) && (endIndex == value.length)) ? this
                : new String(value, beginIndex, subLen);
    }
```
使用
```java
    public static void main(String[] args) {
        String str = "123456";
        String substring = str.substring(2);
        // 3456
        System.out.println(substring);
        // 索引从1开始截取字符串
        String substring2 = str.substring(2,4);
        // 34
        System.out.println(substring2);
    }
```

##### replace
替换字符串.返回一个新的字符串,它是通过用 `newChar` 替换此字符串中出现的所有 `oldChar` 得到的.

源码
```java
 public String replace(char oldChar, char newChar) {
        // 校验: 需要进行替换新旧字符不能相同
        if (oldChar != newChar) {
            // 获取源字符串中的长度
            int len = value.length;
            int i = -1;
            // 获取源字符串
            char[] val = value; /* avoid getfield opcode */
            // 判断源字符串是否存在 需要替换的旧字符
            while (++i < len) {
                if (val[i] == oldChar) {
                    break;
                }
            }
            if (i < len) {
                // 创建新的字符数组 用于替换后保存新字符串 
                char buf[] = new char[len];
                for (int j = 0; j < i; j++) {
                    // 将旧字符存入到新字符数组
                    buf[j] = val[j];
                }
                while (i < len) {
                    char c = val[i];
                    // 替换字符
                    buf[i] = (c == oldChar) ? newChar : c;
                    i++;
                }
                // 创建新字符串对象
                return new String(buf, true);
            }
        }
        return this;
    }
```
使用
```java
    public static void main(String[] args) {
        String str = "123456";
        // 223456
        System.out.println(str.replace('1', '2'));
    }
```

##### replaceAll
使用给定的 `replacement` 替换此字符串所有匹配给定的正则表达式的子字符串.

源码
```java
    public String replaceAll(String regex, String replacement) {
        return Pattern.compile(regex).matcher(this).replaceAll(replacement);
    }
    
```
```java
    // complile 解析正则表达式 获得 Pattern对象
    public static Pattern compile(String regex) {
        return new Pattern(regex, 0);
    }
    
    //matcher 获取匹配器对象
    public Matcher matcher(CharSequence input) {
        if (!compiled) {
            synchronized(this) {
                if (!compiled)
                    compile();
            }
        }
        Matcher m = new Matcher(this, input);
        return m;
    }
    
    // replaceAll 进行字符串替换
    public String replaceAll(String replacement) {
    // 对当前Matcher类进行重置，即对其中记录匹配结果的开始和结束位置索引，以及分组信息重置
        reset();
        // 执行第一次搜索
        boolean result = find();
         // 第一次搜索匹配成功
        if (result) {
            // 用于记录最终的替换结果字符串
            StringBuffer sb = new StringBuffer();
            do {
            // 重点：用于将从上一次匹配子字符串的下一个索引位置开始，到当前匹配的子字符串的结束索引位置的所有字符 append到字符串sb中
                appendReplacement(sb, replacement);
                result = find();
            } while (result);
            // 将从最后一次匹配子字符串的下一个索引位置，到字符串的结尾的所有字符append到字符串sb中
            appendTail(sb);
            return sb.toString();
        }
        return text.toString();
    }
```
重点看一下`replaceAll`中调用的`appendReplacement`方法
```java
    public Matcher appendReplacement(StringBuffer sb, String replacement) {
            
            // ...
            
            // 用于跟踪 replacement 字符串的索引
            int cursor = 0;
            
            // 对当前匹配到子字符串替换后的结果字符串
            StringBuffer result = new StringBuffer();
            
            // 遍历 replacement字符串
            while (cursor < replacement.length()) {
                
                char nextChar = replacement.charAt(cursor);
                
                if (nextChar == '\\') {
                    // 重点1：当字符为'\'时，跳过，并获取其后面的字符，追加到result
                    cursor++;
                    nextChar = replacement.charAt(cursor);
                    result.append(nextChar);
                    cursor++;
                } else if (nextChar == '$') {
                    
                    // 重点2：当字符为$时，跳过，并获取其后面的数值，并以此如果$后面第一个不为数字则抛异常，
                    // Skip past $
                    cursor++;
                    
                    // The first number is always a group
                    int refNum = (int)replacement.charAt(cursor) - '0';
                    
                    // 此处代码用于计算$符号后的数值，数值结果赋予 refNum
                    // ...
                    
                    // group(refNum) 用于获取正则表达式第refNum个分组表示的字符串，不详说了
                    if (group(refNum) != null)
                         // 追加到result
                        result.append(group(refNum));
                } else {
                    
                    // 当前字符不为\ 或 $ 则直接追加到result
                    result.append(nextChar);
                    cursor++;
                }
            }
            
            // 将从上一次匹配的子字符串的结尾索引，到当前匹配的第一个字符串索引的字符串追加到sb
            // lastAppendPosition参数为上一次执行appendReplacement方法最后追加的字符在原始字符串中的索引位置。
            // first 参数为当前待替换的子字符串的首个字符在原始字符串中的索引位置
            sb.append(getSubSequence(lastAppendPosition, first));
            
            // 将当前配置子字符串替换后的结果字符串追加到sb
            sb.append(result.toString());
            
            // 更新lastAppendPosition，供下一个匹配执行appendReplacement方法使用
            lastAppendPosition = last;
            
            /* sb中追加了当前匹配的子字符串与前一次匹配子字符串中间的字符，以及当前匹配子字符串被替换后的字符串
             */
            return this;
        }
```
`replaceAll`中第二个参数`replacement`中，\ 有转义的作用, $ 用于获取分组匹配的当前子字符串 因为引入了 $ 符的分组功能,所以为了解决能输出 $ 字符，故引入 \ 转义功能.

使用
```java
    public static void main(String[] args) {
        String str = "111111";
        // 222222
        System.out.println(str.replaceAll("1", "2"));
    }
```

##### valueOf
该方法作用是将对象转成String类型.

源码
```java
    public static String valueOf(Object obj) {
        return (obj == null) ? "null" : obj.toString();
    }
```
使用
```java
    public static void main(String[] args) {
        Integer integer = 11111;
        String str = String.valueOf(integer);
        // 11111
        System.out.println(str);
    }
```

### 长度限制
翻阅String源码在String源码中发现有定义字符串长度的构造函数
```java
    // count 就是 字符串定义长度 
    public String(char value[], int offset, int count) {
        if (offset < 0) {
            throw new StringIndexOutOfBoundsException(offset);
        }
        if (count <= 0) {
            if (count < 0) {
                throw new StringIndexOutOfBoundsException(count);
            }
            if (offset <= value.length) {
                this.value = "".value;
                return;
            }
        }
        // Note: offset or count might be near -1>>>1.
        if (offset > value.length - count) {
            throw new StringIndexOutOfBoundsException(offset + count);
        }
        this.value = Arrays.copyOfRange(value, offset, offset+count);
    }
```
通过源码可以看到`int`的最大长度就是`String`的支持的最大长度.
```java
    public static void main(String[] args) {
        // 2,147,483,648 = 2^31 - 1 
        System.out.println(Integer.MAX_VALUE);
    }
```
**注意`new String(char value[], int offset, int count)`是运行时`String`支持的最大长度.**


在`String`编译声明期间,用`javac`编译 长度为`2^31 -1`的字符串.
```java
    public static void main(String[] args) {
        // 长度: 2^31 -1
        String str = "1111 ... ";
        System.out.println(str);
    }
```
```
java: 常量字符串过长
```

在`Gen`类中相关报错信息源码
```java
private void checkStringConstant(DiagnosticPosition var1, Object var2) {
    if (this.nerrs == 0 && var2 != null && var2 instanceof String && ((String)var2).length() >= 65535) {
        this.log.error(var1, "limit.string", new Object[0]);
        ++this.nerrs;
    }
}
```
可以看到程序中如果`String`长度大于等于65535会导致编译失败

在编译期的时候,字面量要进字符串常量池.所以要遵守[《Java®虚拟机规范》(Java8)中对String常量池的描述.](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-4.html#jvms-4.4.3)

`CONSTANT_String_info` 用于表示 `java.lang.String` 类型的常量对象结构体

`CONSTANT_String_info`格式如下:
```java 
CONSTANT_String_info {
    u1 tag;
    u2 string_index;
}
```

> **tag**<br>
结构`CONSTANT_String_info`的标签项的值为`CONSTANT_String(8)`

> **string_index**<br>
`string_index` 项的值必须是对常量池的有效索引，常量池在该索引处的项必须是 `CONSTANT_Utf8_info` 结构，表示一组 `Unicode` 码点序列，这组 Unicode 码点序列最终会被初始化为一个 下 `Unicode` 对象

`CONSTANT_Utf8_info`是一个`CONSTANT_Utf8`类型的常量池数据项，它存储的是一个常量字符串。常量池中的所有字面量几乎都是通过`CONSTANT_Utf8_info`描述的。`CONSTANT_Utf8_info`的定义如下：
```java
ONSTANT_Utf8_info {
    u1 tag;
    u2 length;
    u1 bytes[length];
}
```
`length`则指明了 `bytes`数组的长度，其类型为`u2`

通过查阅《JVM规范》发现`u2`表示两个字节的无符号数，那么1个字节有8位，2个字节就有16位。16位无符号数可表示的最大值位`2^16 - 1 = 65535`。也就是说，`Class`文件中常量池的格式规定了，其字符串常量的长度不能超过65535。


**关于编译器字符串最大长度65534的问题**
>如果一个方法的Java虚拟机代码长度正好是65535字节，并且以一个1字节长的指令结束，那么该指令不能被异常处理程序保护。编译器作者可以通过将任何方法、实例初始化方法或静态初始化器(任何代码数组的大小)生成的Java虚拟机代码的最大大小限制为65534字节来解决这个问题

**简单来说**
- 在程序运行时String最大长度为int最大长度为`2^31 -1`
- 在程序编译期根据`String`JVM常量池规范String字符串在声明时最大为 65535,但是为了修复`Java`的遗留问题改为65534

在程序开发中,需要注意如果你用`String`变量接收Base64图片或音频视频需要注意不要超过在程序运行时字符串的最大阈值.

### 编码问题

因为全世界有很多编程人员，有很多语言，不同的国家使用不同的语言，如果说没有一套统一的编码规则，这么多语言混在一起，很容易出现乱码现象，本着既方便又节约内存的理念大家基本都是用`utf-8`码来编写程序.

#### Unicode
> Unicode（中文：万国码、国际码、统一码、单一码）是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得计算机可以用更为简单的方式来呈现和处理文字.

> Unicode伴随着通用字符集的标准而发展，同时也以书本的形式对外发表。Unicode至今仍在不断增修，每个新版本都加入更多新的字符。目前最新的版本为2018年6月5日公布的11.0.0，已经收录超过13万个字符（第十万个字符在2005年获采纳）。Unicode涵盖的数据除了视觉上的字形、编码方法、标准的字符编码外，还包含了字符特性，如大小写字母。

`Unicode`是一种编码规范，是为解决全球字符通用编码而设计的，而`UTF-8 UTF-16`等是这种规范的一种实现.`Unicode`是字符集而`UTF-8`是编码规则。

Java内部采用`Unicode`编码规范，也就是支持多语言的，具体采用的`UTF-16`编码方式.

**不管程序过程中用到了`GBK`还是`ISO8859-1`等格式，在存储与传递的过程中实际传递的都是`Unicode`编码的数据，要想接收到的值不出现乱码，就要保证传过去的时候用的是X编码，接收的时候也用X编码来转换接收**

#### 乱码原因
**编码时格式和解码时格式不一致.**

`string`在文件里面底层保存形式是二进制,底层用`byte[]`数组存储(Java9. Java8是用`char`数组储存).`byte[]`数组里面的内容可以按照不同的编码格式存放.在读取字符串的时候,也可以按照不同的解码格式存放.这样就造成了**乱码**.

简单理解为

在编码(字符串到字节)的时候是用一种编码;而在解码(从字节到字符串)的时候用另一种编码;所以导致乱码问题.**所以想要避免乱码问题最简单的办法就是从始至终,都用同一种字符格式**

#### 相关方法

`String`类有两种比较常用的操作编码方式
```java
    // 注意处理异常
    public static void main(String[] args) throws UnsupportedEncodingException {
        // 本地使用的是 utf-8 的编码
        String str = "你好";
        byte[] bytes = str.getBytes("utf-8");
        // 你好
        System.out.println(new String(bytes));
        String string = new String(str.getBytes(), "utf-8");
        // 你好
        System.out.println(string);
    }
```
##### getBytes(String charsetName)
该方法会根据指定的`decode`编码返回某字符串在该编码下的`byte`数组表示

==**源码分析之后会补上 ...**==

源码
```java
    public byte[] getBytes(String charsetName)
            throws UnsupportedEncodingException {
        if (charsetName == null) throw new NullPointerException();
        return StringCoding.encode(charsetName, value, 0, value.length);
    }
```
`StringCoding.encode`方法
```java
// len: 当前字符串长度
static byte[] encode(String charsetName, char[] ca, int off, int len)
        throws UnsupportedEncodingException
    {
        StringEncoder se = deref(encoder);
        // 如果为空 默认ISO-8859-1
        String csn = (charsetName == null) ? "ISO-8859-1" : charsetName;
        // 
        if ((se == null) || !(csn.equals(se.requestedCharsetName())
                              || csn.equals(se.charsetName()))) {
            se = null;
            try {
                // 根据编码获取 Charset对象
                Charset cs = lookupCharset(csn);
                if (cs != null)
                    se = new StringEncoder(cs, csn);
            } catch (IllegalCharsetNameException x) {}
            if (se == null)
                throw new UnsupportedEncodingException (csn);
            set(encoder, se);
        }
        return se.encode(ca, off, len);
    }
```


##### new String(byte bytes[], String charsetName)
该方法为字节数组构造

`char[]`数组是以`unicode`码来存储的,`String`和`char`为内存形式.`byte`是网络传输或存储的序列化形式.可以通过`charset`来解码指定的`byte`数组，将其解码成`unicode`的`char[]`数组，构造`String`.

==**源码分析之后会补上 ...**==

源码
```java
    public String(byte bytes[], String charsetName)
            throws UnsupportedEncodingException {
        this(bytes, 0, bytes.length, charsetName);
    }
```
```java
    public String(byte bytes[], int offset, int length, String charsetName)
            throws UnsupportedEncodingException {
        if (charsetName == null)
            throw new NullPointerException("charsetName");
        checkBounds(bytes, offset, length);
        this.value = StringCoding.decode(charsetName, bytes, offset, length);
    }
```
```java
    static char[] decode(String charsetName, byte[] ba, int off, int len)
        throws UnsupportedEncodingException
    {
        StringDecoder sd = deref(decoder);
        String csn = (charsetName == null) ? "ISO-8859-1" : charsetName;
        if ((sd == null) || !(csn.equals(sd.requestedCharsetName())
                              || csn.equals(sd.charsetName()))) {
            sd = null;
            try {
                Charset cs = lookupCharset(csn);
                if (cs != null)
                    sd = new StringDecoder(cs, csn);
            } catch (IllegalCharsetNameException x) {}
            if (sd == null)
                throw new UnsupportedEncodingException(csn);
            set(decoder, sd);
        }
        return sd.decode(ba, off, len);
    }
```

# 运算

## 运算符与表达式

### 运算符
运算符指明对操作数的运算方式。组成表达式的Java操作符有很多种。运算符按照其要求的操作数数目来分，可以有**单目运算符、双目运算符和三目运算符**，它们分别对应于1个、2个、3个操作数。


#### 种类
运算符按其功能来分:**有算术运算符、赋值运算符、关系运算符、逻辑运算符、位运算符和其他运算符**.

##### 算术运算符

运算符 | 名称 | 用法描述 | 备注
---|---|---|---
+ | 加法 | 相加运算符两侧的值
- | 减法 | 左操作数减去右操作数
* | 乘法 | 相乘操作符两侧的值
/ | 除法 | 左操作数除以右操作数 | 右操作数不能为0
% | 取余(模) | (左操作数除以右操作数)的余数
++ | 自增 | 操作数的值增加1
-- | 自减 | 操作数的值减少1

基本的`+、-、*、/`就不写了.记录一下剩下的算数运算符

###### 取余
基本用法
```java
    public static void main(String[] args) {
        System.out.println(0%5); // 0
        System.out.println(1%5); // 1
        System.out.println(2%5); // 2
        System.out.println(3%5); // 3
        System.out.println(4%5); // 4
        System.out.println(5%5); // 0
        System.out.println("------------");
        System.out.println(6%5); // 1
        System.out.println(7%5); // 2
        System.out.println(8%5); // 3
        System.out.println(9%5); // 4
        System.out.println(9%1); // 0
    }
```
如果被除数小于除数,那取模的结果就是被除数.如果被除数等于除数,结果是0,如果除数是1,结果是0.


**取余应用**

当使用随机数生成器产生的结果时,取余运算（%）可将结果限制在上限为操作数最大值减1的范围.

例如:n是随机数,那么`n%10`就是`0~9`中的一个数.无论n是多大的数,`n%10`只能是`0~9`之间的一个数,其中10就是操作数.可以利用这一特性,可以在数据库分库,分表 等.

###### 自增和自减
基本用法
```java
    public static void main(String[] args) {
        int i = 1;
        System.out.println(i++); // 1
        System.out.println(i--); // 2
    }
```
**需要特别留意的是`++`和`--`运算符可以前置、后置，都是合法的语句，如`a++`和`++a`都是合法的，上面这两种写法其最终的结果都是是变量a的值加1了，但是它们之间也是有区别的，其区别是：表达是`++a`会先将a的值自增1，然后在使用变量a。而表达式a++是先使用了a的值，然后再让a的值自增1。也就是说在一些表达式，使用`a++`和使用`++a`得到的结果时不一样的。**
```java
    public static void main(String[] args) {
        int i = 1;
        System.out.println(i++);// 1
        System.out.println(++i);// 3
    }
```
自增(`++`)和自减(`--`)两个运算符只能作用于变量,而不能作用于表达式.
```java
    public static void main(String[] args) {
        int j = 0, i = 1;
        // 编译报错
        System.out.println((j+i)++);
    }
```

##### 赋值运算符

运算符 | 名称 | 用法描述
---|---|---
= | 赋值 | 将右操作数的值赋给左侧操作数
+= | 加等于 | 把左操作数和右操作数相加赋值给左操作数
-= | 减等于 | 把左操作数和右操作数相减赋值给左操作数
*= | 乘等于 | 把左操作数和右操作数相乘赋值给左操作数
/= | 除等于 | 把左操作数和右操作数相除赋值给左操作数
%= | 模等于 | 把左操作数和右操作数取模后赋值给左操作数
<<= |左位移等于 | 把左操作数和右操作数进行左移运算后赋值给左操作数
>>= | 右位移等于 | 把左操作数和右操作数进行右移运算后赋值给左操作数
&= | 按位与等于 | 把左操作数和右操作数进行按位与运算后赋值给左操作数
&#124;= | 按位或等于 | 把左操作数和右操作数进行按位或运算后赋值给左操作数
^= | 异或等于 | 把左操作数和右操作数进行按位异或运算后赋值给左操作数


##### 关系运算符

关系运算符也称为比较运算符.
用于测试两个操作数之间的关系.使用关系运算符表达式的最终结果为`boolean`型，也就是其结果只有两个`true`和`false`.

运算符| 名称| 用法描述
---|---|---
== | 双等号| 检查两个操作数的值是否相等,如果相等则条件为真.
!= | 不等号 | 检查两个操作数的值是否相等,如果值不相等则条件为真.
> | 大于 | 检查左操作数的值是否大于右操作数的值,如果是那么条件为真.
< | 小于 | 检查左操作数的值是否小于右操作数的值,如果是那么条件为真.
>= | 大于等于 | 检查左操作数的值是否大于或等于右操作数的值,如果是那么条件为真.
<= | 小于等于 | 检查左操作数的值是否小于或等于右操作数的值,如果是那么条件为真.


##### 逻辑运算符

运算符 | 名称 | 用法描述
---|---|---
&& | 逻辑与 | 当且仅当两个操作数都为真,条件才为真.
&#124;&#124; | 逻辑或 | 如果两个操作数任何一个为真,条件为真.
! | 逻辑非 | 用来反转操作数的逻辑状态.如果条件为true,通过逻辑非将得到false.

###### 短路运算符
`&&`运算符,运算顺序是从左到右计算,运算规则是如果两个操作数都是真,则返回`true`,否则返回`false`.但是当判定到第一个操作数为`false`时,其结果必定为`false`,这时候就不再会判定第二个操作数了.
```java
    public static void main(String[] args) {
        int i = 1, j = 2;
        boolean flag = (i++ == 2) && (++j == 3);
        // flag的值: false,i的值:2,j的值:2
        System.out.printf("flag的值: %s,i的值:%s,j的值:%s", flag, i, j);
    }
```



##### 位运算符

位运算符在追求代码效率和编写底层应用时,使用的比较多;在企业Java开发一般用到的较少.

因为位运算符是以`bit`运算单位的.所以想要要弄明白位运算符,就要先弄明白2进制的表示方法.

位运算符只能对整数型(`int,long,short,byte`)和字符型数据(`char`)进行操作.

运算符 | 名称 | 用法描述
---|---|--
& | 按位与 | 如果相对应位都是1,则结果为1,否则为0
&#124; | 按位或 | 如果相对应位都是 0,则结果为 0,否则为 1
^ | 按位异或 | 如果相对应位值相同,则结果为0,否则为1
~ | 按位取反 | 翻转操作数的每一位,即0变成1,1变成0.
<< | 左移 | 左操作数按位左移右操作数指定的位数.
>> | 右移 | 左操作数按位右移右操作数指定的位数.
>>> | 无符号右移 | 左操作数的值按右操作数指定的位数右移,移动得到的空位以零填充.

基本用法
```java
    public static void main(String[] args) {
        int i = 1, j = 2;
        System.out.println(i&j);//0
        System.out.println(i|j);//3
        System.out.println(i^j);//3
        System.out.println(~(j+i));//-4
        System.out.println(i<<j);//4
        System.out.println(i>>j);//0
        System.out.println(i>>>j);//0
    }
```
解析:

以下示例用十进制的1和2进行运算.1用二进制表示为`0000 0001`,2用二进制表示为`0000 0010`

[10进制2进制互相转换](https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=84053098_3_dg&wd=10%E8%BF%9B%E5%88%B62%E8%BF%9B%E5%88%B6%E4%BA%92%E7%9B%B8%E8%BD%AC%E6%8D%A2&oq=10%25E8%25BF%259B%25E5%2588%25B6%25E8%25BD%25AC2%25E8%25BF%259B%25E5%2588%25B6&rsv_pq=9f05db4800008506&rsv_t=4617NLMuQ52L6oXD88Gi8vJjMVr6IQbqNansTAbnebIc1aA01paog1ZjxRMF2nDZX9bz5A&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&inputT=1483&rsv_sug3=188&rsv_sug1=103&rsv_sug7=100&rsv_sug4=1844)怎么转就不讲了.不懂的小伙伴可自行查看链接.

&:如果相对应位都是1,则结果为1,否则为0
```txt
0000 0001
0000 0010
——————————
0000 0000
```
|:如果相对应位都是 0,则结果为 0,否则为 1
```txt
0000 0001
0000 0010
——————————
0000 0011
```
^:如果相对应位值相同,则结果为0,否则为1
```txt
0000 0001
0000 0010
——————————
0000 0011
```
~:翻转操作数的每一位,即0变成1,1变成0.
> 十进制负数转换为二进制,就是将其相反数（正数）的补码的每一位变反（1变0，0变1）最后将变完了的数值加1,就完成了负数的补码运算.这样就变成了二进制.二进制转十进制负数相反.

```txt
0000 0011
——————————
1111 1100
```
`<<`:左操作数按位左移右操作数指定的位数.

1左移两位
```txt
0000 0001
——————————
0000 0100
```
`>>`:左操作数按位右移右操作数指定的位数.

正数右移高位补0，负数右移高位补1

1右移两位
```txt
0000 0001
——————————
0000 0000
```
负一右移两位
```txt
1111 1111
——————————
1111 1111
```

`>>>`:左操作数的值按右操作数指定的位数右移,移动得到的空位以零填充.

无符号右移,无论是正数还是负数,高位通通补0

1无符号右移两位
```txt
0000 0001
——————————
0000 0000
```
负一无符号右移两位
```txt
1111 1111
——————————
0011 1111
```

##### 其他运算符

###### 三目运算符
该运算符有3个操作数,其功能是对表达式条件进行判断,根据判断结果是`true`或者`false`两种情况赋予赋予不同的返回值.
该运算符的主要是决定哪个值应该赋值给变量.

可以发现三目运算符与`if...else`作用是相同的.
```java
    public static void main(String[] args) {
        int var1 = 1;
        int var2 = 0;
        var1 = var2 > 1 ?  1: 2;
        
        // 等价于if...else以下代码
        if (var2 > 1) {
            var1 = 1;
        }else {
            var1 = 2;
        }
    }
```

三目运算符的原理到底是什么,与`if...else`到底哪有啥不同?要探究这个原因,需要看JVM是对三目运算符怎么处理的.

```java
    public static void main(String[] args) {
        int var1 = 1;
        int var2 = 0;
        // 如果var2大于1 则var1等于1 否则等于2
        var1 = var2 > 1 ?  1: 2;
    }
```
用`javap -verbose`命令反编译

```class
  // ...
{
 // ...
  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=3, args_size=1
         0: iconst_1 // 向栈里添加int类型 1
         1: istore_1 // 将int 1 存储到局部变量
         2: iconst_0 // 向栈里添加int类型 0
         3: istore_2 // 将int 2 存储到局部变量
         4: iload_2  // 从局部变量加载int 2
         5: iconst_1
         6: if_icmple     13  // 将1,3步骤栈中的变量弹出 进行比较
         9: iconst_1 // 比较成功 存储该值到栈中
        10: goto          14 // 改变地址
        13: iconst_2
        14: istore_1
        15: return
      LineNumberTable:
        line 6: 0
        line 7: 2
        line 8: 4
        line 9: 15
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0      16     0  args   [Ljava/lang/String;
            2      14     1  var1   I
            4      12     2  var2   I
      StackMapTable: number_of_entries = 2
        frame_type = 253 /* append */
          offset_delta = 13
          locals = [ int, int ]
        frame_type = 64 /* same_locals_1_stack_item */
          stack = [ int ]
}
// ...
```
```java
    public static void main(String[] args) {
        int var1 = 1;
        int var2 = 0;
        if (var2 > 1){
            var1 = 1;
        } else {
            var1 = 2;
        }
    }
```
反编译
```class
  // ...
  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=3, args_size=1
         0: iconst_1
         1: istore_1
         2: iconst_0
         3: istore_2
         4: iload_2
         5: iconst_1
         6: if_icmple     14
         9: iconst_1
        10: istore_1
        11: goto          16
        14: iconst_2
        15: istore_1
        16: return
      LineNumberTable:
        line 6: 0
        line 7: 2
        line 8: 4
        line 9: 9
        line 11: 14
        line 13: 16
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0      17     0  args   [Ljava/lang/String;
            2      15     1  var1   I
            4      13     2  var2   I
      StackMapTable: number_of_entries = 2
        frame_type = 253 /* append */
          offset_delta = 14
          locals = [ int, int ]
        frame_type = 1 /* same */
}
// ...

```

通过查阅[《Java虚拟机指令集》](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-6.html),可以看到JVM对上边的代码进行了什么处理.

**通过比较两次反编译后的代码可以得出一个结论:三目运算符,省去了一步赋值操作** 所以实际开发中三目运算符的运算效率略高于`if..else`.
但是对于实际开发来说三目运算符的可读性相对不如`if...else`代码，所以在常见的编码中，三目运算符更倾向于简单的`if...else`语句的替代.

###### instanceof
`interfaceof`是一个双目运算符,该关键字的作用是判断左边的对象是不是右边类的实例,并返回一个`boolean`值

基本用法

```java
    public static void main(String[] args) {
        String str1 = "123";
        String str = (str1 instanceof Object) ? "123" : "456";
    }
```


#### 运算顺序

Java 语言中大部分运算符也是从左向右结合的,只有单目运算符、赋值运算符和三目运算符例外,是从右向左运算的.

Java 语言中运算符的优先级共分为 14 级,其中 1 级最高,14 级最低.在同一个表达式中运算符优先级高的先执行.

> 算术运算符>比较运算符>赋值运算符>逻辑运算符>三元运算符<br><br>
可使用以下口诀记住：
单目乘除为关系,逻辑三目后赋值.

**运算符优先级表**

| 优先级 | 运算符                                           |  结合性  |
| :----: | ------------------------------------------------ | :------: |
|   1    | ()、[]                                     | 从左向右 |
|   2    | !、+、-、~、++、--                               | 从右向左 |
|   3    | *、/、%                                          | 从左向右 |
|   4    | +、-                                             | 从左向右 |
|   5    | «、»、>>>                                       |  从左向  |
|   6    | <、<=、>、>=、instanceof                         | 从左向右 |
|   7    | ==、!=                                           | 从左向右 |
|   8    | &                                                | 从左向右 |
|   10   | \|                                               | 从左向右 |
|   11   | &&                                               | 从左向右 |
|   12   | \|\|                                             | 从左向右 |
|   13   | ?:                                               | 从右向左 |
|   14   | =、+=、-=、*=、/=、&=、\|=、^=、~=、<<=、>>=、>>>= | 从右向左 |


==建议==

- 不要把一个表达式写得过于复杂,如果一个表达式过于复杂，则会影响代码可读性,建议把它分成几步来完成.
- 不要过多地依赖运算符的优先级来控制表达式的执行顺序,这样可读性太差,尽量使用小括号来控制表达式的执行顺序.



### 表达式
表达式是由运算符和运算对象组成的,单独的一个运算对象(常量/变量)也可以叫做表达式.

变量的赋值与计算都离不开表达式,表达式的运算依赖于变量、常量和运算符.

在Java中表达式通常是以分号结尾的一段代码.
```java
float f1 = 1.1f;
float f2 = 1.2f;
float f3 = f1 + f2;
```
#### Java正则表达式
> 正则表达式，又称规则表达式。（英语：Regular Expression，在代码中常简写为regex、regexp或RE），计算机科学的一个概念。正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本。在众多语言中都可以支持正则表达式，如`Perl、PHP、Java、Python、Ruby`等.

正则表达式并不仅限于某一种语言,但是在每种语言中有细微的差别.

例如：
> 在其他语言中，`\\` 表示：我想要在正则表达式中插入一个普通的（字面上的）反斜杠.<br>
在 Java 中，`\\` 表示：我要插入一个正则表达式的反斜线，所以其后的字符具有特殊的意义。<br>
所以，在其他的语言中,一个反斜杠`\`就足以具有转义的作用，而在 Java 中正则表达式中则需要有两个反斜杠才能被解析为其他语言中的转义作用。也可以简单的理解在 Java 的正则表达式中，两个 `\\` 代表其他语言中的一个 \，这也就是为什么表示一位数字的正则表达式是 `\\d`，而表示一个普通的反斜杠是 `\\\\`。

正则表达式是由普通字符（如英文字母）以及[特殊字符（也称为元字符）](https://www.runoob.com/regexp/regexp-metachar.html)组成的文字模式.

例如：
```java
String str = "abc^123/?[1,2]";
```

在Java语言中主要是使用正则表达式处理字符串.Java从jdk1.4开始提供了一个包`java.util.regex`来处理正则表达式.

在Java开发中主要使用`java.util.regex`包中`Pattern`类,`Matcher`类来处理字符串.
详情参照文档[《Java™平台
标准Ed. 8》](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html),[《菜鸟教程》Java正则表达式](https://www.runoob.com/java/java-regular-expressions.html) ,[《JavaSchool》Java正则表达式](http://www.51gjie.com/java/761.html) 这几个文档里面有详细的介绍,所以这里不作详细介绍了.

使用正则表达式示例:
```java
    public static void main(String[] args) {
        // 表示匹配以字母a为开头的单词
        String regx = "\\ba\\w*\\b";
        // 将给定的正则表达式编译到具有给定标志的模式中
        Pattern pattern = Pattern.compile(regx);
        // 创建匹配给定输入与此模式的匹配器
        Matcher matcher = pattern.matcher("abcdab cccabcd aaacd");
        int index = 0;
        // 循环 查找与上边正则匹配的字符序列
        while (matcher.find()) {
            // 返回 由以前匹配操作 所匹配的 输入子序列
            String res = matcher.group();
            System.out.println(index + ":" + res);
            index++;
        }
    }
```
```
0:abcdab
1:aaacd
```
**总的来说正则表达式是对字符串操作的一种逻辑公式,用事先定义好的一些特定字符、及这些特定字符的组合,组成一个"规则字符串",这个"规则字符串"用来表达对字符串的一种过滤逻辑.**

**正则表达式的灵活性、逻辑性和功能性非常的强.可以迅速地用极简单的方式达到字符串的复杂控制.但是对于刚接触的人来说,比较晦涩难懂.**

##### 常用正则

描述 | 正则表达式
---|---
是否为数字 | `^[0-9]*$`
是否为n位数数字 | `^\d{n}$`
是否为m-n位的数字 | `^\d{m,n}$`
是否输入至少n位的数字 | `^/d{n,}$"`
是否为整数 | `^-?/d+$`
是否为负整数 | `^-[0-9]*[1-9][0-9]*$`
是否为正整数 | `^[0-9]*[1-9][0-9]*$`
是否为汉字 | `^[\u4e00-\u9fa5]{0,}$`
是否为邮箱 | `^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`
是否为域名 | `[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?`
是否为URL | `^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$`
是否为手机号码 | `^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$`
是否为固话号码 | `^($$\d{3,4}-)|\d{3.4}-)?\d{7,8}$`
是否为身份证号码 | `^([0-9]){7,18}(x|X)?$ 或^\d{15}|\d{18}$或 ^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$`
是否以字母开头,长度在6~18之间,只能包含字母、数字和下划线 | `^[a-zA-Z]\w{5,17}$`
是否必须包含大小写字母和数字的组合,不能使用特殊字符,长度在8-10之间 | `^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$`
是否为腾讯QQ号码 | `[1-9][0-9]{4,}` (QQ号从10000开始)
是否为中国邮政编码 | `[1-9]\d{5}(?!\d)`
是否为ip地址 | `((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}\2`



## 控制流语句

### if-else语句
`if`语句是最基本的控制语句,它只有在`If(exception)`为`true`的时候才会执行特定的代码.
```java
    public static void main(String[] args) {
        boolean var1 = true;
        if (var1){
            System.out.println("hello world ...");
        }
    }
```
`if`语句后面可以跟`else`语句.当`If(exception)`为`false`时,`else`语句体将被执行.
```java
    public static void main(String[] args) {
        boolean var1 = false;
        if (var1){
            System.out.println("if ...");
        }else{
            System.out.println("else ...");
        }
    }
```
`if`语句后面可以跟 `else if…else` 语句
```java
public class HelloWorld {
    public static void main(String[] args) {
        String var = "123";
        if ("123".equals(var)){
            System.out.println("123 ...");
        }else if("234".equals(var)){
            System.out.println("234 ...");
        }else if ("345".equals(var)){
            System.out.println("345 ...");
        }else{
            System.out.println("...");
        }
    }

}
```

### switch语句
`switch`语句是在项目开发中是比较常用的.可以和`if...else`起到相同的作用,但是用`switch`代码可读性更高.

`switch case`语句判断一个变量与一系列值中某个值是否相等,每个值称为一个分支.

`switch`语句可以包含一个`default`分支. `default` 在没有`case`语句的值和变量值相等的时候执行.`default` 分支不需要`break`语句。
```java
    public static void main(String[] args) {
        String s = "123";
        switch (s) {
            case "123":
                System.out.println("123");
                break;
            case "456":
                System.out.println("456");
                break;
             default :
                System.out.println("over ...");
        }
    }   
```
`switch`语句中的变量类型可以是： `byte,short,int,char` 或者 `enum`从 Java 7 开始,可以在`switch`条件判断语句中使用`String`对象.

**switch 不支持 long**，是因为 `switch` 的设计初衷是对那些只有少数的几个值进行等值判断，如果值过于复杂，那么还是用 `if` 比较合适。

```java
long x = 111;
 switch (x) { 
     case 111:
         System.out.println(111);
         break;
     case 222:
         System.out.println(222);
         break;
}
```

当变量的值与`case`语句的值相等时,那么`case`语句之后的语句开始执行，直到`break`语句出现才会跳出`switch`语句.如果没有`break`语句出现,程序会继续执行下一条`case`语句,直到出现`break`语句.

```java
public static void main(String[] args) {
        int i = 100;
        switch (i){
            case 100:
                System.out.println("first case ...");
            case 200:
                System.out.println("second case ...");
                break;
        }
    }
```

### for语句
for循环执行的次数是在执行前就确定的.

for语句提供了一种紧凑的方法来遍历一系列值。程序员经常将其称为“for循环”，因为它反复循环直到满足特定条件。for语句的一般形式可以表示为:
```java
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            System.out.println(i);
        }
    }
```
for循环的三个表达式是可选的;可以这样创建一个无限循环:

```java
/ /无限循环
for(;;){

    // to do ...
}
```

`foreach`语句是java5的新特征之一，在遍历数组、集合方面,为开发人员提供了极大的方便.

**`foreach`循环的效率大概是普通for循环效率的一半** ,但在项目开发中如果只是少量的循环,可以忽略`foreach`带来的影响.
```java
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};
        ArrayList<String> list = new ArrayList<>(Arrays.asList(arr));
        for (String s : list) {
            System.out.println(s);
        }
        for (String s : arr) {
            System.out.println(s);
        }
    }
```
**分支语句`break`,`continue`和`return`**

`continue`语句用来结束当前循环,并进入下一次循环,即仅仅这一次循环结束了,不是所有循环结束了,后边的循环依旧进行.
```java
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};
        for (String s : arr) {
            // 如果s等于1,则结束本次循环 执行下次循环
            if ("1".equals(s)) {
                continue;
            }
            System.out.println("...");
        }
    }
```
`break`语句作用是跳出循环.`break`主要用在循环语句或者`switch`语句中
```java
public class HelloWorld {
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};
        for (String s : arr) {
            // s等于2,结束for循环
            if ("2".equals(s)) {
                break;
            }
            System.out.println("...");
        }
    }

}
```
如果存在多层循环,要注意`break`只能跳出一层循环.
```java
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};
        for (int i = 0; i < 10; i++) {
            for (String s : arr) {
                if ("2".equals(s)) {
                    break;
                }
                System.out.println("...");
            }
            System.out.println("外层 for ...");
        }
    }
```
如果存在多层循环,可以用以下方式,当然也可以用`break`跳两次循环
```java
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};
        
        test:
        for (int i = 0; i < 10; i++) {
            for (String s : arr) {
                if ("2".equals(s)) {
                    break test;
                }
                System.out.println("...");
            }
            System.out.println("外层 for ...");
        }
    }
```
`continue`也可以用这种方式
```java
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};

        test:
        for (int i = 0; i < 10; i++) {
            for (String s : arr) {
                if ("1".equals(s)) {
                    continue test;
                }
            }
            System.out.println("外层 for ...");
        }
    }
```

`return`语句表示从当前方法退出,控制流返回到调用方法的地方。


上面`continue`的示例,用`return`也能达到一样的效果
```java
    public static void main(String[] args) {
        String[] arr = {"1", "2", "3"};

        for (int i = 0; i < 10; i++) {
            for (String s : arr) {
                if ("1".equals(s)) {
                    return;
                }
            }
            System.out.println("外层 for ...");
        }
    }
```

`return`语句有两种形式:一种返回值，另一种不返回值。要返回一个值，只需将值(或计算该值的表达式)放在`return`关键字之后. 

像这样
```java
return ++count;
```


### do-while和while语句

`while`语句对表达式进行计算，表达式必须返回一个布尔值。如果表达式的计算结果为`true`,`while`语句将执行`while`块中的语句。`while`语句继续测试表达式并执行其块，直到表达式的计算结果为`false`.

```java
    public static void main(String[] args) {
        int i = 0;
       while(++i >= 1){
           i--;
        }
    }
```
死循环
```java
    public static void main(String[] args) {
        while (true) {
        }
    }
```

`do…while`循环和`while`循环相似，不同的是`do…while`循环至少会执行一次.
```java
    public static void main(String[] args) {
        int i = 0;
        do{
            i++;
            System.out.println(" ... ");
        }while (--i == 1);
    }
```

**注意:布尔表达式在循环体的后面，所以语句块在检测布尔表达式之前已经执行了.如果布尔表达式的值为`true`，则语句块一直执行，直到布尔表达式的值为`false`**


## 参数传递

### 实参与形参
> 形式参数：是在定义函数名和函数体的时候使用的参数,目的是用来接收调用该函数时传入的参数。

> 实际参数：在调用有参函数时，主调函数和被调函数之间有数据传递关系。在主调函数中调用一个函数时，函数名后面括号中的参数称为“实际参数”。

举个例子:
```java
public class HelloWorld {
    public static void main(String[] args) {
        // 实参 
        test("world");
    }
    
    // 形参
    public static void test(String param){
        System.out.println("hello " + param);
    }
}
```

### 值传递与引用传递

> 值传递: 是指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。

> 引用传递: 是指在调用函数时将实际参数的地址直接传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。

 ... | 值传递 | 引用传递
---|---|---
区别 | 传参时会创建副本 | 传参数不创建副本
描述 | 方法中无法修改原始对象 | 方法中可以修改原始对象


### Java传递对象参数

很多人理解Java中,传递的参数如果是普通类型，那就是值传递，如果是对象，那就是引用传递.这个理解是错误的.

举个例子:

**如果在方法中改变对象的字段值会改变原对象该字段值，因为改变的是同一个地址指向的内容。**

```
graph LR

A(main方法)-->对象1(main方法中的对象)
对象1==>对象值
B(func方法)-->对象2(func中的对象)
对象2==>|修改|对象值
```

```java
class PassByValueExample {
    public static void main(String[] args) {
        Dog dog = new Dog("A");
        func(dog);
        System.out.println(dog.getName());          // B
    }

    private static void func(Dog dog) {
        dog.setName("B");//dog.name="B";
    }
}
```
然后有人就说Java传递对象类型参数是引用传递.这一点在官方[《Java™教程》](https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html)中有相关的描述.

> Passing Reference Data Type Arguments.
Reference data type parameters, such as objects, are also passed into methods by value. This means that when the method returns, the passed-in reference still references the same object as before. However, the values of the object's fields can be changed in the method, if they have the proper access level.<br>

**传递引用数据类型参数。
引用数据类型参数(如对象)也按值传递给方法。这意味着，当方法返回时，传入的引用仍然引用与之前相同的对象。但是，如果对象的字段具有适当的访问级别，则可以在方法中更改它们的值。**

> 例如，考虑任意类中的一个移动Circle对象的方法:

```java
public void moveCircle(Circle circle, int deltaX, int deltaY) {
    // code to move origin of circle to x+deltaX, y+deltaY
    circle.setX(circle.getX() + deltaX);
    circle.setY(circle.getY() + deltaY);
        
    // code to assign a new reference to circle
    circle = new Circle(0, 0);
}
```
> 使用以下参数调用该方法:

```java
moveCircle(myCircle, 23, 56)
```

> 在这个方法中，circle最初指的是`myCircle`。该方法将`circle`引用的对象(即`myCircle`)的x坐标和y坐标分别更改了23和56。当方法返回时，这些更改将持续存在。然后`circle`被赋予一个新的`circle`对象x = y = 0的引用。但是，这种重新分配不具有持久性，因为引用是按值传入的，不能更改。在方法中，circle指向的对象已经改变，但是，当方法返回时，`myCircle`仍然引用与方法调用之前相同的`circle`对象。

值传递和引用传递最大的区别是传递的过程中有没有复制出一个副本来，如果是传递副本，那就是值传递，否则就是引用传递。
在Java中，其实是通过值传递实现的参数传递，只不过对于Java对象的传递，传递的内容是对象的引用。
所以说 **==Java的参数是以值传递的形式传入方法中,而不是引用传递.==**

**Java对象的传递，是通过复制的方式把引用关系传递了，如果我们没有改引用关系，而是找到引用的地址，把里面的内容改了，是会对调用方有影响的，因为大家指向的是同一个共享对象。**

以下代码中`Dog`类中的`dog`是一个指针，存储的是对象的地址.
```java
public class Dog {

    String name;

    Dog(String name) {
        this.name = name;
    }

    String getName() {
        return this.name;
    }

    void setName(String name) {
        this.name = name;
    }

    String getObjectAddress() {
        return super.toString();
    }
}
public class PassByValueExample {
    public static void main(String[] args) {
        Dog dog = new Dog("A");
        // Dog@4554617c
        System.out.println(dog.getObjectAddress()); 
        func(dog);
        // Dog@4554617c
        System.out.println(dog.getObjectAddress()); 
        // A
        System.out.println(dog.getName());          
    }

    private static void func(Dog dog) {
        // Dog@4554617c
        System.out.println(dog.getObjectAddress()); 
        //重新new生成新的对象
        dog = new Dog("B");
        // Dog@74a14482
        System.out.println(dog.getObjectAddress()); 
        // B
        System.out.println(dog.getName());          
    }
}
```


## Java运算

### 精度丢失

在Java中,使用浮点类型进行计算会造成精度丢失

例如:
```java
    public static void main(String[] args) {
        // 0.20000005
        System.out.println(1.2f - 1);
        // 0.19999999999999996
        System.out.println(1.2d - 1);
    }
```

那么为什么会浮点类型会存在精度精度丢失问题呢?

因为[Java的浮点类型在计算机中是用二进制来存储](https://www.zhihu.com/question/46432979/answer/221485161)的,也就是小数在转二进制的时候出现了精度丢失.

PS: 小数如何转二进制
> 将该数字乘以2，取出整数部分作为二进制表示的第1位；然后再将小数部分乘以2，将得到的整数部分作为二进制表示的第2位；以此类推，直到小数部分为0.<br>
特殊情况： 小数部分出现循环，无法停止，则用有限的二进制位无法准确表示一个小数，这也是在编程语言中表示小数会出现误差的原因.

例如:  0.1 转二进制
```
    0.1 转2进制
    
    0.1 x 2 = 0.2  取整数位 0
    0.2 x 2 = 0.4  取整数位 0
    0.4 x 2 = 0.8  取整数位 0
    0.8 x 2 = 1.6  取整数位 1
    0.6 x 2 = 1.2  取整数位 1
    0.2 x 2 = 0.4  取整数位 0
    0.4 x 2 = 0.8  取整数位 0
    0.8 x 2 = 1.6  取整数位 1
    0.6 x 2 = 1.2  取整数位 1
    
    ........无限循环
```
因为计算机中存储一个浮点类型所用的位数是有限的,所以遇到无限循环的小数,只能选择在某个精度进行保存.

**由于计算机中保存的小数其实是十进制的小数的近似值，并不是准确值，所以，千万不要在代码中使用浮点数来表示金额等重要的指标。**


### BigDecimal

`BigDecimal`由任意精度的整数非标度值和32位的整数标度 `scale`组成。如果为零或正数，则标度是小数点后的位数。如果为负数，则将该数的非标度值乘以 10 的负`scale` 次幂。因此,`BigDecimal`表示的数值是`unscaledValue × 10-scale`.

> Java在`java.math`包中提供的API类`BigDecimal`，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数。**在实际应用中，需要对更大或者更小的数进行运算和处理。`float`和`double`只能用来做科学计算或者是工程计算，在商业计算中要用`java.math.BigDecimal`。** `BigDecimal`所创建的是对象，我们不能使用传统的`+、-、*、/`等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是`BigDecimal`的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象.

Java中提供了大数字(超过16位有效位)的操作类,即`java.math.BinInteger`类和`java.math.BigDecimal`类,用于高精度计算.

其中`BigInteger`类是针对大整数的处理类,而`BigDecimal`类则是针对大小数的处理类.`BigDecimal`类的实现用到了 `BigDecimal`BigInteger类,不同的是`BigDecimal`加入了小数的概念.

之所以要用`BigDecimal`,是因为十进制的小数在转化成二进制浮点数时会精度丢失.

#### 使用

##### 基本运算

`BigDecimal`类创建的是对象,不能使用传统的`+、-、*、/`等算术运算符直接对其进行数学运算,而必须调用其对应的方法.方法的参数也必须是`BigDecimal`类型的对象.

```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("2");
        BigDecimal num2 = new BigDecimal("1");
        BigDecimal num3;

        num3 = num1.add(num2);
        System.out.printf("num1 + num2 = %s\n",num3);

        num3 = num1.subtract(num2);
        System.out.printf("num1 - num2 = %s\n",num3);

        num3 = num1.multiply(num2);
        System.out.printf("num1 * num2 = %s\n",num3);

        num3 = num1.divide(num2);
        System.out.printf("num1 / num2 = %s\n",num3);
        
        // 绝对值
        System.out.printf("|num1 / num2| = %s\n",num3.abs());
    }
```

`BigDecimal`基本用法如上所示,重点记录一下除法.

在使用除法的时候如果两个数字,除不尽.而又没有设置精确小数位和舍入模式,就会报错.
```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("1");
        BigDecimal num2 = new BigDecimal("3");
        BigDecimal num3;

        num3 = num1.divide(num2);
        System.out.printf("num1 / num2 = %s\n",num3);
    }
```
```
Exception in thread "main" java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.
```
为了防止报错,我们可以这样写
```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("1");
        BigDecimal num2 = new BigDecimal("3");
        BigDecimal num3;

        num3 = num1.divide(num2,3, BigDecimal.ROUND_UP);
        // 打印结果: num1 / num2 = 0.334
        System.out.printf("num1 / num2 = %s\n",num3);
    }
```

`BigDecimal`类`divide`方法
```java
// divisor: 除数; scale: 精确小数位; roundingMode: 舍入模式
public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)
```
舍入模式,如果不指定默认采用四舍五入方式.

```
/**
     * Rounding mode to round away from zero.  Always increments the
     * digit prior to a nonzero discarded fraction.  Note that this rounding
     * mode never decreases the magnitude of the calculated value.
     * 向远离0的方向舍入 如2.35 --> 2.4
     */
    public final static int ROUND_UP =           0;

    /**
     * Rounding mode to round towards zero.  Never increments the digit
     * prior to a discarded fraction (i.e., truncates).  Note that this
     * rounding mode never increases the magnitude of the calculated value.
     * 向零方向舍入 直接删除多余小数位 如2.35 --> 2.3
     */
    public final static int ROUND_DOWN =         1;

    /**
     * Rounding mode to round towards positive infinity.  If the
     * {@code BigDecimal} is positive, behaves as for
     * {@code ROUND_UP}; if negative, behaves as for
     * {@code ROUND_DOWN}.  Note that this rounding mode never
     * decreases the calculated value.
     * 向正无穷方向舍入
     */
    public final static int ROUND_CEILING =      2;

    /**
     * Rounding mode to round towards negative infinity.  If the
     * {@code BigDecimal} is positive, behave as for
     * {@code ROUND_DOWN}; if negative, behave as for
     * {@code ROUND_UP}.  Note that this rounding mode never
     * increases the calculated value.
     * 向负无穷方向舍入
     */
    public final static int ROUND_FLOOR =        3;

    /**
     * Rounding mode to round towards {@literal "nearest neighbor"}
     * unless both neighbors are equidistant, in which case round up.
     * Behaves as for {@code ROUND_UP} if the discarded fraction is
     * &ge; 0.5; otherwise, behaves as for {@code ROUND_DOWN}.  Note
     * that this is the rounding mode that most of us were taught in
     * grade school.
     * 向（距离）最近的一边舍入，除非两边（的距离）是相等,如果是这样，向上舍入, 1.55保留一位小数结果为1.6
     */
    public final static int ROUND_HALF_UP =      4;

    /**
     * Rounding mode to round towards {@literal "nearest neighbor"}
     * unless both neighbors are equidistant, in which case round
     * down.  Behaves as for {@code ROUND_UP} if the discarded
     * fraction is {@literal >} 0.5; otherwise, behaves as for
     * {@code ROUND_DOWN}.
     * 向（距离）最近的一边舍入，除非两边（的距离）是相等,如果是这样，向下舍入, 例如1.55 保留一位小数结果为1.5 
     */
    public final static int ROUND_HALF_DOWN =    5;

    /**
     * Rounding mode to round towards the {@literal "nearest neighbor"}
     * unless both neighbors are equidistant, in which case, round
     * towards the even neighbor.  Behaves as for
     * {@code ROUND_HALF_UP} if the digit to the left of the
     * discarded fraction is odd; behaves as for
     * {@code ROUND_HALF_DOWN} if it's even.  Note that this is the
     * rounding mode that minimizes cumulative error when applied
     * repeatedly over a sequence of calculations.
     * 向（距离）最近的一边舍入，除非两边（的距离）是相等,如果是这样，如果保留位数是奇数，使用ROUND_HALF_UP ，如果是偶数，使用ROUND_HALF_DOWN 
     */
    public final static int ROUND_HALF_EVEN =    6;

    /**
     * Rounding mode to assert that the requested operation has an exact
     * result, hence no rounding is necessary.  If this rounding mode is
     * specified on an operation that yields an inexact result, an
     * {@code ArithmeticException} is thrown.
     * 计算结果是精确的，不需要舍入模式 
     */
    public final static int ROUND_UNNECESSARY =  7;
```
所以我们在使用`BigDecimal`除法的时候,最好要指定精确小数位和舍入模式.

##### 初始化
`BigDecimal`一共有两种方法可以进行初始化赋值
 - 构造器初始化赋值
 - `valueOf`方法初始化赋值

###### valueOf
`valueOf(double val)`底层也是调用`String`构造
```java
    public static BigDecimal valueOf(double val) {
        // Reminder: a zero double returns '0.0', so we cannot fastpath
        // to use the constant ZERO.  This might be important enough to
        // justify a factory approach, a cache, or a few private
        // constants, later.
        return new BigDecimal(Double.toString(val));
    }
```
`valueOf(long val)`
```java
    public static BigDecimal valueOf(long val) {
        // 判断在不在 缓存常用的小BigDecimal值中
        if (val >= 0 && val < zeroThroughTen.length)
            return zeroThroughTen[(int)val];
        else if (val != INFLATED)
            return new BigDecimal(null, val, 0, 0);
        // 会调用BigInteger中 valueOf(long val)涉及到BigDecimal原理
        return new BigDecimal(INFLATED_BIGINT, val, 0, 0);
    }
```

###### double类型构造器

重点记录一下**double类型构造器初始化赋值**

在使用`BigDecimal`中参数为`double`类型的构造器时,发现存储结果并不准确.
```java
    public static void main(String[] args) {
        // 打印结果: 0.200000000000000011102230246251565404236316680908203125
        System.out.println(new BigDecimal(0.2));
    }
```
发现Java API 中有相关的描述
> The results of this constructor can be somewhat unpredictable.
One might assume that writing {@code new BigDecimal(0.1)} in
Java creates a {@code BigDecimal} which is exactly equal to
0.1 (an unscaled value of 1, with a scale of 1), but it is
actually equal to
0.1000000000000000055511151231257827021181583404541015625.
This is because 0.1 cannot be represented exactly as a
{@code double} (or, for that matter, as a binary fraction of
any finite length).  Thus, the value that is being passed
<i>in</i> to the constructor is not exactly equal to 0.1,
appearances notwithstanding.<br><br>
>  The {@code String} constructor, on the other hand, is perfectly predictable: writing {@code new BigDecimal("0.1")} creates a {@code BigDecimal} which is <i>exactly</i> equal to
0.1, as one would expect.  Therefore, it is generally
recommended that the {@linkplain #BigDecimal(String)
<tt>String</tt> constructor} be used in preference to this one.

大概意思是说 用`double`作为参数的构造函数，无法精确构造一个`BigDecimal`对象，需要自己指定一个上下文的环境，也就是指定精确位。

而利用String对象作为参数传入的构造函数能精确的构造出一个`BigDecimal`对象.

```java
    public static void main(String[] args) {
        // 0.2
        System.out.println(new BigDecimal("0.2"));
    }
```
所以要想获得精确的结果,要使用`BigDecimal`的字符串构造函数,不要使用`double`参数的构造函数.

PS: 另外说一下`BigDecimal`转换其他类型.`BigDecimal`类提供了`intValue,byteValue,shortValue`...将`BigDecimal`对象转换成对应的值.
```java
    public static void main(String[] args) {
        BigDecimal bigDecimal = new BigDecimal("1.2");
        System.out.println(bigDecimal.byteValue());
        System.out.println(bigDecimal.shortValue());
        System.out.println(bigDecimal.intValue());
        System.out.println(bigDecimal.floatValue());
        System.out.println(bigDecimal.doubleValue());
        System.out.println(bigDecimal.longValue());
    }
```

##### 比较

用`BigDecimal`的equals来进行比较
```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("1.10");
        BigDecimal num2 = new BigDecimal("1.1");
        BigDecimal num3 = new BigDecimal("1.1");
        // false
        System.out.println(num1.equals(num2));
        // true
        System.out.println(num2.equals(num3));
    }
```
我们可以看到,用`BigDecimal`的`equals`方法进行比较,我们可以看到`1.10`和`1.1`数值是相等的,而`equals`方法返回的却是`false`.

为了查清原因,看一下`BigDecimal`中重写的`equals`的源码
```java
    /**
     * Compares this {@code BigDecimal} with the specified
     * {@code Object} for equality.  Unlike {@link
     * #compareTo(BigDecimal) compareTo}, this method considers two
     * {@code BigDecimal} objects equal only if they are equal in
     * value and scale (thus 2.0 is not equal to 2.00 when compared by
     * this method).
     *
     * @param  x {@code Object} to which this {@code BigDecimal} is
     *         to be compared.
     * @return {@code true} if and only if the specified {@code Object} is a
     *         {@code BigDecimal} whose value and scale are equal to this
     *         {@code BigDecimal}'s.
     * @see    #compareTo(java.math.BigDecimal)
     * @see    #hashCode
     */
    @Override
    public boolean equals(Object x) {
        if (!(x instanceof BigDecimal))
            return false;
        BigDecimal xDec = (BigDecimal) x;
        if (x == this)
            return true;
        if (scale != xDec.scale)
            return false;
        long s = this.intCompact;
        long xs = xDec.intCompact;
        if (s != INFLATED) {
            if (xs == INFLATED)
                xs = compactValFor(xDec.intVal);
            return xs == s;
        } else if (xs != INFLATED)
            return xs == compactValFor(this.intVal);

        return this.inflated().equals(xDec.inflated());
    }
```
源码API注释中有写.
> objects equal only if they are equal in value and scale. thus 2.0 is not equal to 2.00 when compared by this method

大概意思: 对象只有在`value`和`scale`相等时才相等.因此,用本方法比较时,2.0不等于2.00.

PS: `BigDecimal`对象中`scale`字段属性
```java
    /**
     * The scale of this BigDecimal, as returned by {@link #scale}.
     *
     * @serial
     * @see #scale
     */
    private final int scale;  // Note: this may have any value, so
                              // calculations must be done in longs
```
`scale`指的是小数点后面的位数.


`BigDecimal`可以通过`setScale`来提高精度,只要新设的值比原来的大.
```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("1.12345");
        num1.setScale(8);
        System.out.println(num1);
    }
    
```
`setScale`方法返回一个`BigDecimal`对象,它的`scale`是指定的值，并且它的值在数字上大于等于这个`BigDecimal`对象的值。

```java
public BigDecimal setScale(int newScale);
```
如果不是,则抛出`arithmex exception`.

例如: 在上面的示例中,如果设置`setScale(4)`就会报错
```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("1.12345");
        num1.setScale(4);
        System.out.println(num1);
    }
```
```txt
java.lang.ArithmeticException: Rounding necessary
```

`BigDecimal`也可以通过`setScale`来降低精度.因为新设的值比原来的小,所以必须保证原来数值的该位小数点后面都是0,只有这样才可以设比原来小的精度。

例如
```java
    public static void main(String[] args) {
        BigDecimal num1 = new BigDecimal("1.1234500000");
        num1.setScale(5);
        // 1.1234500000
        System.out.println(num1);
    }
```

所以不要用`equals`方法来比较`BigDecimal`对象,因为它的equals方法会比较`scale`,如果`scale`不一样,它会返回false.

比较大小建议使用`BigDecimal`类中重写的`compareTo`方法进行比较

```java
public static void main(String[] args) {
        BigDecimal a = new BigDecimal("1.10");
        BigDecimal b = new BigDecimal("1.1");

        if(a.compareTo(b) == -1){
            System.out.println("a小于b");
        }

        if(a.compareTo(b) == 0){
            System.out.println("a等于b");
        }

        if(a.compareTo(b) == 1){
            System.out.println("a大于b");
        }

        if(a.compareTo(b) > -1){
            System.out.println("a大于等于b");
        }

        if(a.compareTo(b) < 1){
            System.out.println("a小于等于b");
        }
    }

```


#### 保证精度原因及注意事项

**为什么`BigDecimal`能够保证精度?**

**因为十进制整数在转化成二进制数时不会有精度问题,那么把十进制小数扩大N倍让它在整数的维度上进行计算,并保留相应的精度信息.所以就能保证精度了.**



**注意事项**

1.在需要精确的小数计算时再使用`BigDecimal`,`BigDecimal`的性能比`double`和`float`差,在处理庞大,复杂的运算时尤为明显.故一般精度的计算没必要使用`BigDecimal`.


2. 尽量使用参数类型为String的构造函数.如果处理`double`类型数据,可使用`BigDecimal.valueOf(double val)`


3. `BigDecimal`都是不可变的的,在进行每一次四则运算时,都会产生一个新的对象,所以在做加减乘除运算时要记得要保存操作后的值.

### Math

`java.lang.Math`,该类和Java中的运算息息相关.`Math`类被`final`修饰.构造方法是私有的.`Math`类中大部分方法都被`public static` 修饰.

#### 常用方法

```java
public static void main(String[] args) {
        // 计算平方根
        System.out.printf("4的平方根: %s\n",Math.sqrt(4));

        //计算立方根
        System.out.printf("8的立方根: %s\n",Math.cbrt(8));

        // 计算n的m次方
        System.out.printf("2的3次方: %s\n",Math.pow(2,3));

        // 计算最大值
        System.out.printf("1和2中最大值: %s\n",Math.max(1,2));

        // 计算最小值
        System.out.printf("1和2中最小值: %s\n",Math.min(1,2));

        // 求绝对值
        System.out.printf("-1的绝对值: %s\n",Math.abs(-1));

        // 向上取整
        System.out.printf("1.2向上取整: %s\n",Math.ceil(1.2));

        // 向下取整
        System.out.printf("1.2向下取整: %s\n",Math.floor(1.2));

        // [0,1)区间的随机数
        System.out.printf("[0,1)区间的随机数: %s\n",Math.random());

        // 返回与参数值最接近的 double值
        double rint = Math.rint(1.5);
        System.out.printf("rint方法: %s\n",rint);

        // 四舍五入 float时返回int值，double时返回long值
        long round = Math.round(1.5);
        int round1 = Math.round(1.5f);
        System.out.printf("round方法: 1.5四舍五入: %s\n",round);
    }
```
```
4的平方根: 2.0
8的立方根: 2.0
2的3次方: 8.0
1和2中最大值: 2
1和2中最小值: 1
-1的绝对值: 1
1.2向上取整: 2.0
1.2向下取整: 1.0
[0,1)区间的随机数: 8.293290468311953E-4
rint方法: 1.5四舍五入: 2.0
round方法: 1.5四舍五入: 2
```

其中`sqrt`方法,`cbrt`方法,`pow`方法用`native`关键字修饰,是用其他语言实现的.这里不做过多分析.

##### max
```java
        // 计算最大值
        System.out.printf("1和2中最大值: %s\n",Math.max(1,2));
```

> 返回两个`{@code int}`值中较大的一个。也就是说，结果是参数更接近`{@link Integer#MAX_VALUE}`的值。如果参数具有相同的值，则结果为相同的值。

源码
```java
    public static int max(int a, int b) {
        return (a >= b) ? a : b;
    }
```

##### min
```java
        // 计算最小值
        System.out.printf("1和2中最小值: %s\n",Math.min(1,2));
```

> 返回两个`{@code int}`值中较小的一个。也就是说，参数的结果更接近`{@link Integer#MIN_VALUE}`的值。如果参数具有相同的值，则结果为相同的值。

源码
```java
    public static int min(int a, int b) {
        return (a <= b) ? a : b;
    }
```

##### abs
```java
        // 求绝对值
        System.out.printf("-1的绝对值: %s\n",Math.abs(-1));
```

> 返回`{@code int}`值的绝对值。如果实参不是负数，则返回实参。如果参数为负数，则返回参数的否定值。

源码
```java
    public static int abs(int a) {
        return (a < 0) ? -a : a;
    }
```

##### ceil和floor
`ceil`方法的功能是向上取整。`ceil`译为“天花板”，顾名思义就是对操作数取顶，`Math.ceil(a)`就是取大于a的最小整数。需要注意的是它的返回值不是`int`类型，而是`double`类型.
```java
        // 向上取整
        System.out.printf("1.2向上取整: %s\n",Math.ceil(1.2));
```
`floor`方法的功能是向下取整。`floor`译为“地板”，顾名思义是对操作数取底。`Math.floor(a)`，就会取小于a的最大整数。它的返回值类型与`ceil`一致，也是`double`类型。
```java
        // 向下取整
        System.out.printf("1.2向下取整: %s\n",Math.floor(1.2));
```
**由于`ceil`方法和`floor`方法逻辑是一样的,区别只是传入的参数不同,所以下面主要分析一个方法.**

以`ceil`方法为例
> 返回大于或等于参数的最小(最接近负无穷){@code double}值，并且等于一个数学整数。<br>
特殊情况:<br>
- 如果参数值已经等于一个数学整数，则结果与参数相同。
- 如果参数是NaN或无穷大或正零或负零，则结果与参数相同。
- 如果实参值小于零但大于-1.0，则结果为负零。
注意`{@code Math.ceil(x)}`的值正好是`{@code -Math.floor(-x)}`的值。

源码
```java
    public static double ceil(double a) {
        // default impl. delegates to StrictMath
        return StrictMath.ceil(a);
    }
    /**
     * |
     * |
     * |
     * ↓
     */
    // StrictMath.ceil
    public static double ceil(double a) {
        return floorOrCeil(a, -0.0, 1.0, 1.0);
    }
    /**
     * |
     * |
     * |
     * ↓
     */
   /*
    *内部方法共享floor和ceil之间的逻辑。
    *
    * @param a 被floored或ceiled的值
    * @param negativeBoundary (- 1,0)中的值的结果
    * @param positiveBoundary (0,1)中的值的结果
    * @param increment 当参数是非整数时要添加的值
    */
    private static double floorOrCeil(double a,
                                      double negativeBoundary,
                                      double positiveBoundary,
                                      double sign) {
        /**
         * 返回用于{@code double}表示的无偏指数。
         *
         * 特殊情况:
         * 
         * 如果参数为NaN或infinite，则结果为{@link Double#MAX_EXPONENT} + 1。
         * 如果参数为零或低于标准，则结果为{@link Double#MIN_EXPONENT} -1。
         */
        // 将浮点数或双精度数转换为浮点表示形式.该方法从表示中返回指数部分
        int exponent = Math.getExponent(a);

        if (exponent < 0) {
            /*
             * 参数的绝对值小于1
             * floorOrceil(-0.0) => -0.0
             * floorOrceil(+0.0) => +0.0
             */
            return ((a == 0.0) ? a :
                    ( (a < 0.0) ?  negativeBoundary : positiveBoundary) );
        } else if (exponent >= 52) {
            /*
             * 无穷，NaN，或者一个很大的值.但一定是整数
             */
            return a;
        }
        // 否则，参数要么是一个已经异或运算的整数值
        // 必须四舍五入为1
        assert exponent >= 0 && exponent <= 51;

        long doppel = Double.doubleToRawLongBits(a);
        long mask   = DoubleConsts.SIGNIF_BIT_MASK >> exponent;

        if ( (mask & doppel) == 0L )
            return a; // integral value
        else {
            double result = Double.longBitsToDouble(doppel & (~mask));
            if (sign*a > 0.0)
                result = result + sign;
            return result;
        }
    } 
    
```


##### random
返回一个大于0的`double`类型数据，该值大于等于0.0且小于1.0，返回的是一个伪随机选择数，在该范围内（几乎）均匀分布.
```java
        // [0,1)区间的随机数
        System.out.printf("[0,1)区间的随机数: %s\n",Math.random());
```
API中`random`方法描述
> 返回一个大于或等于`{@code 0.0}`且小于`{@code 1.0}`的`{@code double}`值，带有正号。返回值是在该范围内(近似)均匀分布的伪随机选择的。<br>
当这个方法第一次被调用时，它会创建一个新的伪随机数生成器，与表达式`{@code new java.util.Random()}`完全一样。
此方法被正确同步以允许多个线程正确使用。但是，如果许多线程需要以非常快的速度生成伪随机数，那么每个线程拥有自己的伪随机数生成器就可以减少争用。

API中`nextDouble`方法中描述
> 返回该随机数生成器序列中在`{@code 0.0}`和`{@code 1.0}`之间均匀分布的`{@code double}`值的下一个伪随机值。
`{@code nextDouble}`的一般约定是，从`{@code 0.0d}`(包括)到`{@code 1.0d}`(排除)范围内(近似地)统一选择一个`{@code double}`值，伪随机生成并返回。

源码
```java
    public static double random() {
        return RandomNumberGeneratorHolder.randomNumberGenerator.nextDouble();
    }
    /**
     * |
     * |
     * |
     * ↓
     */
    // Random.nextDouble
    public double nextDouble() {
        return (((long)(next(26)) << 27) + next(27)) * DOUBLE_UNIT;
    }
```
通过源码可以看到,`Math.random`底层是调用了`Random`类中`nextDouble`方法.

也就是说以下打印语句**执行代码相同**
```java
    // [0,1)区间的随机数
    System.out.printf("[0,1)区间的随机数: %s\n",Math.random());
    System.out.printf("[0,1)区间的随机数: %s\n",new Random().nextDouble());
```

**Random**类
> 该类的一个实例用于生成**伪随机数**流。该类使用48位种子，并使用线性同余公式进行修改。(参见Donald Knuth， 计算机编程的艺术，第二卷，第3.2.1节。)

> 如果用相同的种子创建了`{@code Random}`的两个实例，并且对每个实例进行了相同的方法调用序列，那么它们将生成并返回相同的数字序列。为了保证这个属性，为类`{@code Random}`指定了特定的算法。为了保证Java代码的绝对可移植性，Java实现必须对`{@code Random}`类使用这里显示的所有算法。然而，`{@code Random}`类的子类约定了所有的方法。

`Random`类位于`java.util`包下，此类的实例用于生成伪随机数流。之所以称之为伪随机，是因为真正意义上的随机数（或者称为随机事件）在某次产生过程中是按照实验过程表现的分布概率随机产生的，其结果是不可预测，不可见的。而计算机中的随机函数是按照一定的算法模拟产生的，其结果是确定的，可见的。我们认为这样产生的数据不是真正意义上的随机数，因而称之为伪随机。

该类提供了两种构造方法.

无参构造底层调用的也是有参构造.将`System.nanoTime()`作为参数传递。即如果使用无参构造，默认的seed值为`System.nanoTime()`。
```java
    public Random() {
        this(seedUniquifier() ^ System.nanoTime());
    }
```

```java
    public Random(long seed) {
        if (getClass() == Random.class)
            this.seed = new AtomicLong(initialScramble(seed));
        else {
            // subclass might have overriden setSeed
            this.seed = new AtomicLong();
            setSeed(seed);
        }
    }
```

要注意的是用有参构造创建`Random`对象,如果随机种子相同,不管执行多少次,最后结果都是相同的.

例如
```java
    public static void main(String[] args) {
        Random random = new Random(1);
        // 第一次执行程序打印结果: 随机数: -1155869325
        // 第二次执行程序打印结果: 随机数: -1155869325
        System.out.printf("随机数: %s\n",random.nextInt());
    }
```
**随机数应用举例**

生成100个不重复的随机数,1~100的范围
```java
    public static void main(String[] args) {
        int[] nums=new int[100];
        boolean[] flag=new boolean[101];
        Random random=new Random();
        for (int i = 0; i < nums.length; i++) {
            int num=random.nextInt(100)+1;
            while (flag[num]) {
                num=random.nextInt(100)+1;
            }
            flag[num]=true;
            nums[i]=num;
        }
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        System.out.println(Arrays.toString(flag));
    }
```


##### rint
> 返回与参数值最接近的`{@code double}`值，该值等于一个数学整数。如果两个数学整数`{@code double`}值相同，则结果为偶数整数值.<br><br>   
特殊情况:<br>
如果参数值已经等于一个数学整数，则结果与参数相同。<br>
如果参数是NaN或无穷大或正零或负零，则结果与参数相同

```java
        // 返回与参数值最接近的 double值
        double rint = Math.rint(1.5);
        System.out.printf("rint方法: %s\n",rint);
```
若存在两个这样的数,则返回其中的偶数值

例如
```java
    public static void main(String[] args) {
        double rint = Math.rint(100.5);
        double rint2 = Math.rint(101.5);  
        // 100.0
        System.out.printf(" %s\n",rint);
        // 102.0
        System.out.printf(" %s\n",rint2); 
    }
```


##### round
> round 表示"四舍五入"，算法为`Math.floor(x+0.5)` ，即将原来的数字加上 0.5 后再向下取整，所以 `Math.round(11.5)` 的结果为 12，`Math.round(-11.5)` 的结果为 -11。
```java
        // 四舍五入 float时返回int值，double时返回long值
        long round = Math.round(1.5);
        int round1 = Math.round(1.5f);
        System.out.printf("round方法: 1.5四舍五入: %s\n",round);
```

> 返回与实参最接近的`{@code int}`，并四舍五入到正无穷。
特殊情况:
- 如果参数是NaN，结果是0。
如果参数是负无穷或任何值小于或等于{`@code Integer.MIN_VALUE}`，结果等于`{@code Integer.MIN_VALUE}`的值。
- 如果参数是正无穷或任何大于或等于`{@code Integer.MAX_VALUE}`，结果等于`{@code Integer.MAX_VALUE}`的值.

> **PS: NAN
NaN表示非数值，例如：0.0/0结果为NAN，负数的平方根结果也为NAN.**

```java
   public static void main(String[] args) {
        // 四舍五入 float时返回int值，double时返回long值
        int round1 = Math.round(0);
        long round2 = Math.round(Double.NaN);
        int round3 = Math.round(2147483648123L);
        int round4 = Math.round(-2147483647123L);
        System.out.printf("0四舍五入: %s\n", round1);
        System.out.printf("Double.NaN=[%s],四舍五入: %s\n", Double.NaN, round2);
        System.out.printf("Integer.MAX_VALUE=[%s] + 1 四舍五入: %s\n", Integer.MAX_VALUE, round3);
        System.out.printf("Integer.MIN_VALUE=[%s] - 1 四舍五入: %s\n", Integer.MIN_VALUE, round4);
    }
```
```
0四舍五入: 0
Double.NaN=[NaN],四舍五入: 0
Integer.MAX_VALUE=[2147483647] + 1 四舍五入: 2147483647
Integer.MIN_VALUE=[-2147483648] - 1 四舍五入: -2147483648
```
# 面向对象

> 面向对象是一种编程思想，包括三大特性和六大原则，其中，三大特性指的是封装、继承和多态；六大原则指的是单一职责原则、开闭式原则、迪米特原则、里氏替换原则、依赖倒置原则以及接口隔离原则，其中，单一职责原则是指一个类应该是一组相关性很高的函数和数据的封装，这是为了提高程序的内聚性，而其他五个原则是通过抽象来实现的，目的是为了降低程序的耦合性以及提高可扩展性。

面向对象简称OO(object-oriented)是相对面向过程(procedure-oriented)来说的,是一种编程思想.Java就是一门面向对象的语言.

面向对象编程简称OOP(Object-oriented programming),是将事务高度抽象化的编程模式.
面向对象编程是以功能来划分问题的,将问题分解成一个一个步骤,对每个步骤进行相应的抽象,形成对应对象,通过不同对象之间的调用,组合成某个功能解决问题.

## 对比面向过程

> PS: 面向过程编程简称POP(Procedural oriented programming),面向过程是以过程为中心的编程思想.是自顶而下的编程.

举个栗子: 下五子棋
```

面向过程 {

  1.开始游戏

  2.黑子先走

  3.绘制画面

  4.判断输赢

  5.轮到白子

  6.绘制画面

  7.判断输赢

  8.返回到 黑子先走
 
}
```

```
面向对象 {

    1.创建黑棋,白棋
    
    2.创建棋盘
    
    3.创建规则
    
    4.赋予每个对象相关属性和指定行为
    
    5.各个功能之间互相调用
}
```

**面向对象是模型化的,你只需抽象出几个类,进行封装成各个功能,通过不同对象之间的调用来解决问题.而面向过程需要把问题分解为几个步骤,每个步骤用对应的函数调用即可.面向过程是具体化的,流程化的,解决一个问题,需要你一步一步的分析,一步一步的实现.**

面向对象的底层其实还是面向过程,把面向过程抽象成类,然后进行封装,方便我们我们使用,就是面向对象了.

简而言之,用面向过程的方法写出来的程序是一份蛋炒饭,而用面向对象写出来的程序是一份盖浇饭(就是在一碗白米饭上面浇上一份盖菜，你喜欢什么菜,你就浇上什么菜).
通过例子可以看出面向对象更重视不重复造轮子,即创建一次,重复使用.

面向对象
> 优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护<br>
缺点：性能比面向过程低

面向过程
> 优点：流程化使得编程任务明确，在开发之前基本考虑了实现方式和最终结果，具体步骤清楚，便于节点分析;    效率高，面向过程强调代码的短小精悍，善于结合数据结构来开发高效率的程序。<br>
缺点：没有面向对象易维护、易复用、易扩展

抽象会使复杂的问题更加简单化,面向对象更符合人类的思维,而面向过程则是机器的思想.

## 软件设计原则
**设计原则的目的是为了让程序达到高内聚、低耦合，提高可扩展性的目的，其实现手段是面向对象的三大特性：封装、继承以及多态。**

设计原则名称 | 核心思想
---|---
[单一职责原则](#单一职责原则) | 一个类只负责一个功能领域中的相应职责
[开放封闭原则](#开放封闭原则) | 软件实体应对扩展开放，而对修改关闭
[依赖倒转原则](#依赖倒转原则) | 抽象不应该依赖于细节，细节应该依赖于抽象
[里氏替换原则](#里氏替换原则) | 所有引用基类对象的地方能够透明地使用其子类的对象
[接口隔离原则](#接口隔离原则) | 使用多个专门的接口，而不使用单一的总接口
[合成复用原则](#合成复用原则) | 尽量使用对象组合，而不是继承来达到复用的目的
[迪米特法则](#迪米特法则) | 一个软件实体应当尽可能少地与其他实体发生相互作用


### 单一职责原则
> **其核心思想为：一个类，最好只做一件事，只有一个引起它的变化。单一职责原则可降低类的复杂度,提高代码可读性,可维护性,降低变更风险.** 单一职责原则可以看做是低耦合、高内聚在面向对象原则上的引申，将职责定义为引起变化的原因，以提高内聚性来减少引起变化的原因。职责过多，可能引起它变化的原因就越多，这将导致职责依赖，相互之间就产生影响，从而大大损伤其内聚性和耦合度。通常意义下的单一职责，就是指只有一种单一功能，不要为类实现过多的功能点，以保证实体只有一个引起它变化的原因。 专注，是一个人优良的品质；同样的，单一也是一个类的优良设计。交杂不清的职责将使得代码看起来特别别扭牵一发而动全身，有失美感和必然导致丑陋的系统错误风险。

代码实现

```java
public class MainTest {
    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        vehicle.running("汽车");
        // 飞机不是在路上行驶
        vehicle.running("飞机");
    }
}

/**
 * 在run方法中违反了单一职责原则
 * 解决方法根据不同的交通工具,分解成不同的类即可
 */
class Vehicle{
    public void running(String name) {
        System.out.println(name + "在路上行驶 ....");
    }
}

```
```java
// 解决
public class MainTest {
    public static void main(String[] args) {
        Driving driving = new Driving();
        driving.running("汽车");
        Flight flight = new Flight();
        flight.running("飞机");
    }
}

class Driving {
    public void running(String name) {
        System.out.println(name + "在路上行驶 ....");
    }
}

class Flight {
    public void running(String name) {
        System.out.println(name + "在空中飞行 ....");
    }
}
```
**通常情况下,我们应当遵循单一职责原则,只要逻辑足够简单,才可以在代码里边违反单一职责原则;只要类中方法数量足够少,可以在方法级别保持单一职责原则.**

```java
public class MainTest {
    public static void main(String[] args) {
        Vehicle2 vehicle2 = new Vehicle2();
        vehicle2.driving("汽车");
        vehicle2.flight("飞机");
    }
}
/*
 * 改进
 *↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 */

class Vehicle2 {
    public void driving(String name) {
        System.out.println(name + "在路上行驶 ....");
    }
    public void flight(String name) {
        System.out.println(name + "在空中飞行 ....");
    }
}
```

### 开放封闭原则
> **软件实体应该是可扩展的，而不可修改的。也就是，对(提供方)扩展开放，对(使用方)修改封闭的。** 开放封闭原则主要体现在两个方面
>- 对扩展开放，意味着有新的需求或变化时，可以对现有代码进行扩展，以适应新的情况。
>- 对修改封闭，意味着类一旦设计完成，就可以独立完成其工作，而不要对其进行任何尝试的修改。 
>
>实现开放封闭原则的核心思想就是对抽象编程，而不对具体编程，因为抽象相对稳定。让类依赖于固定的抽象，所以修改就是封闭的；而通过面向对象的继承和多态机制，又可以实现对抽象类的继承，通过覆写其方法来改变固有行为，实现新的拓展方法，所以就是开放的。 “需求总是变化”没有不变的软件，所以就需要用封闭开放原则来封闭变化满足需求，同时还能保持软件内部的封装体系稳定，不被需求的变化影响。==**编程中遵循其他原则,以及使用其他设计模式的目的就是为了遵循开闭原则.**==

当软件需要变化时,尽量使用扩展的软件实体的方式行为来实现变化,而不是通过修改已有的代码来实现变化.

代码实现

```java

public class MainTest {
    public static void main(String[] args) {
        Mother mother = new Mother();

        Son son = new Son();
        Daughter daughter = new Daughter();

        // 注入子类对象 如果扩展需要其他类 换成其他对象即可
        mother.setAbstractFather(son);
        mother.display();
    }
}

abstract class AbstractFather {

    protected abstract void display();

}
class Son  extends AbstractFather{
    @Override
    protected void display() {
        System.out.println("son class ...");
    }
}
class Daughter  extends AbstractFather{

    @Override
    protected void display() {
        System.out.println("daughter class ...");
    }
}

class Mother {

    private AbstractFather abstractFather;

    public void setAbstractFather(AbstractFather abstractFather) {
        this.abstractFather = abstractFather;
    }

    public void display() {
        abstractFather.display();
    }

}
```

### 依赖倒转原则
> **该原则依赖于抽象。具体而言就是高层模块不依赖于底层模块，二者都同依赖于抽象；抽象不依赖于具体，具体依赖于抽象。** 我们知道，依赖一定会存在于类与类、模块与模块之间。当两个模块之间存在紧密的耦合关系时，最好的方法就是分离接口和实现：在依赖之间定义一个抽象的接口使得高层模块调用接口，而底层模块实现接口的定义，以此来有效控制耦合关系，达到依赖于抽象的设计目标。 抽象的稳定性决定了系统的稳定性，因为抽象是不变的，依赖于抽象是面向对象设计的精髓，也是依赖倒置原则的核心。 依赖于抽象是一个通用的原则，而某些时候依赖于细节则是在所难免的，必须权衡在抽象和具体之间的取舍，方法不是一层不变的。**依赖于抽象，就是对接口编程，不要对实现编程。**

代码实现
```java

public class MainTest {

    public static void main(String[] args) {
        Computer computer = new Computer();
        // 对接口编程，不要对实现编程
        // 如果没有接口 则代码很难实现扩展
        Disk disk = new CustomDisk();
        Memory memory = new CustomMemory();

        computer.setDisk(disk);
        computer.setMemory(memory);
        computer.run();
    }

}

interface Disk{
    void diskMethod();
}

interface Memory{
    void memoryMethod();
}

class CustomDisk implements Disk{

    @Override
    public void diskMethod() {
        System.out.println("i am disk ...");
    }
}

class  CustomMemory implements Memory{

    @Override
    public void memoryMethod() {
        System.out.println("i am memory ...");
    }
}

class Computer {

    private Memory memory;

    private Disk disk;

    public void setDisk(Disk disk) {
        this.disk = disk;
    }

    public void setMemory(Memory memory) {
        this.memory = memory;
    }

    public Disk getDisk() {
        return disk;
    }

    public Memory getMemory() {
        return memory;
    }
    public void run() {
        System.out.println(" computer is running ...");
        memory.memoryMethod();
        disk.diskMethod();
    }
}
```


### 接口隔离原则
> **使用多个小的专门的接口，而不要使用一个大的总接口。** 具体而言，接口隔离原则体现在：接口应该是内聚的，应该避免“胖”接口。一个类对另外一个类的依赖应该建立在最小的接口上，不要强迫依赖不用的方法，这是一种接口污染。 接口有效地将细节和抽象隔离，体现了对抽象编程的一切好处，接口隔离强调接口的单一性。而胖接口存在明显的弊端，会导致实现的类型必须完全实现接口的所有方法、属性等；而某些时候，实现类型并非需要所有的接口定义，在设计上这是“浪费”，而且在实施上这会带来潜在的问题，对胖接口的修改将导致一连串的客户端程序需要修改，有时候这是一种灾难。在这种情况下，将胖接口分解为多个特点的定制化方法，使得客户端仅仅依赖于它们的实际调用的方法，从而解除了客户端不会依赖于它们不用的方法。 
>
>分离的手段主要有以下两种：
>- 委托分离，通过增加一个新的类型来委托客户的请求，隔离客户和接口的直接依赖，但是会增加系统的开销。
>- 多重继承分离，通过接口多继承来实现客户的需求，这种方式是较好的。

代码实现
```java
public class MainTest {
    public static void main(String[] args) {
        FuncImpl func = new FuncImpl();
        func.func1();
        func.func2();
        func.func3();
    }
}

interface Function1{
    void func1();
    // 如果将接口中的方法都写在一个接口会
    // 造成实现该接口就要重写该接口所有方法
    // void func2();
    // void func3();
}
interface Function2 {
    void func2();
}
interface Function3 {
    void func3();
}

class FuncImpl implements Function1,Function2,Function3{

    @Override
    public void func1() {
        System.out.println("i am function1 impl");
    }

    @Override
    public void func2() {
        System.out.println("i am function2 impl");
    }

    @Override
    public void func3() {
        System.out.println("i am function3 impl");
    }
}
```


### 里氏替换原则
> **子类必须能够替换其基类。** 这一思想体现为对继承机制的约束规范，只有子类能够替换基类时，才能保证系统在运行期内识别子类，这是保证继承复用的基础。在父类和子类的具体行为中，必须严格把握继承层次中的关系和特征，将基类替换为子类，程序的行为不会发生任何变化。同时，这一约束反过来则是不成立的，子类可以替换基类，但是基类不一定能替换子类。 里氏替换原则，主要着眼于对抽象和多态建立在继承的基础上，因此只有遵循了里氏替换原则，才能保证继承复用是可靠地。实现的方法是面向接口编程：将公共部分抽象为基类接口或抽象类，通过`Extract Abstract Class`，在子类中通过覆写父类的方法实现新的方式支持同样的职责。 里氏替换原则是关于继承机制的设计原则，违反了里氏替换原则就必然导致违反开放封闭原则。 里氏替换原则能够保证系统具有良好的拓展性，同时实现基于多态的抽象机制，能够减少代码冗余，避免运行期的类型判别。

简单来说就是子类可以扩展父类的功能,但是尽量不要重写父类的功能.如果通过重写父类方法来完成新的功能,这样写起来虽然简单,但整个体系的可复用性会非常差,特别是运用多态比较频繁时,程序运行出错的概率会非常大.

代码实现
```java

public class MainTest {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle();
        rectangle.setWidth(20);
        rectangle.setHeight(10);
        resize(rectangle);
        print(rectangle);
        System.out.println("=======================");
        // 因为 Square类 重写了父类set的方法导致调用时出错
        Rectangle square = new Square();
        square.setWidth(10);
        resize(square);
        print(square);
    }
    public static void resize(Rectangle rectangle){
        while (rectangle.getWidth() >= rectangle.getHeight()){
            rectangle.setHeight(rectangle.getHeight() + 1);
        }
    }

    public static void print(Rectangle rectangle){
        System.out.println(rectangle.getWidth());
        System.out.println(rectangle.getHeight());
    }
}

class Square  extends Rectangle{
    private Integer width;
    private Integer height;

    @Override
    public void setWidth(Integer width) {
        super.setWidth(width);
        super.setHeight(width);
    }

    @Override
    public void setHeight(Integer height) {
        super.setWidth(height);
        super.setHeight(height);
    }
}
class Rectangle {
    private Integer width;
    private Integer height;

    public void setWidth(Integer width) {
        this.width = width;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWidth() {
        return width;
    }

    public Integer getHeight() {
        return height;
    }
}
```

### 合成复用原则
> **尽量使用对象组合，而不是继承来达到复用的目的。** 在面向对象设计中，可以通过两种方法在不同的环境中复用已有的设计和实现，**即通过组合/聚合关系或通过继承，但首先应该考虑使用组合/聚合**，组合/聚合可以使系统更加灵活，降低类与类之间的耦合度，一个类的变化对其他类造成的影响相对较少；其次才考虑继承，在使用继承时，需要严格遵循里氏代换原则，有效使用继承会有助于对问题的理解，降低复杂度，而滥用继承反而会增加系统构建和维护的难度以及系统的复杂度，因此需要慎重使用继承复用。

代码实现

详见[继承与组合](#继承与组合)

### 迪米特法则
> 迪米特法则又叫最少知识原则，就是说一个对象应当对其他对象有尽可能少的了解。
其核心思想是: **降低类之间的耦合.如果类与类之间的关系越密切，耦合度越大，当一个类发生改变时，对另一个类的影响也越大.一个对象应该对其他对象有最少的了解。** 通俗地讲，一个类应该对自己需要耦合或调用的类知道得最少，你（被耦合或调用的类）的内部是如何复杂都和我没关系，那是你的事情，我就知道你提供的`public`方法，我就调用这么多，其他的一概不关心.迪米特法则其根本思想，是强调了类之间的松耦合。类之间的耦合越弱，越有利于复用，一个处在弱耦合的类被修改，不会对有关系的类造成搏击，也就是说，信息的隐藏促进了软件的复用。

迪米特法则还有个更简单的定义：只与直接的朋友通信

朋友定义：**每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。** 耦合的方式很多，依赖，关联，组合，聚合等。其中，我们称出现**成员变量，方法参数，方法返回值中的类为直接的朋友**，而出现在**局部变量中的类不是直接的朋友**。也就是说，==陌生的类最好不要以局部变量的形式出现在类的内部。==

代码实现
```java
public class MainTest {
    public static void main(String[] args) {
        //创建了一个 SchoolManager 对象
        SchoolManager schoolManager = new SchoolManager();
        // SchoolManager直接朋友: CollegeManager (方法参数) Employee(返回值)
        // CollegeEmployee以局部变量的形式出现在SchoolManager类中 所以违反了迪米特法则
        schoolManager.printAllEmployee(new CollegeManager());
    }
}


class Employee {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}


class CollegeEmployee {
    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}

class CollegeManager {
    public List<CollegeEmployee> getAllEmployee() {
        List<CollegeEmployee> list = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            CollegeEmployee emp = new CollegeEmployee();
            emp.setId("学院员工 id= " + i);
            list.add(emp);
        }
        return list;
    }
}

class SchoolManager {

    public List<Employee> getAllEmployee() {
        List<Employee> list = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            //这里我们增加了 5 个员工到
            Employee emp = new Employee();
            emp.setId("学校总部员工 id= " + i);
            list.add(emp);
        }
        return list;
    }

    void printAllEmployee(CollegeManager sub) {
        //获取到学院员工
        List<CollegeEmployee> list1 = sub.getAllEmployee();
        System.out.println("------------学院员工------------");
        for (CollegeEmployee e : list1) {
            System.out.println(e.getId());
        }
        //获取到学校总部员工
        List<Employee> list2 = this.getAllEmployee();
        System.out.println("------------学校总部员工------------");
        for (Employee e : list2) {
            System.out.println(e.getId());
        }
    }
}
```
```java

class CollegeManager {
    public List<CollegeEmployee> getAllEmployee() {
        List<CollegeEmployee> list = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            CollegeEmployee emp = new CollegeEmployee();
            emp.setId("学院员工 id= " + i);
            list.add(emp);
        }
        return list;
    }
    // 修改后
    public void printAllEmployee() {
        List<CollegeEmployee> list1 = this.getAllEmployee();
        System.out.println("------------学院员工------------");
        for (CollegeEmployee e : list1) {
            System.out.println(e.getId());
        }
    }
}

class SchoolManager {

    public List<Employee> getAllEmployee() {
        List<Employee> list = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            //这里我们增加了 5 个员工到
            Employee emp = new Employee();
            emp.setId("学校总部员工 id= " + i);
            list.add(emp);
        }
        return list;
    }

    void printAllEmployee(CollegeManager sub) {
        //获取到学院员工
        // 修改后
        sub.printAllEmployee();

        //获取到学校总部员工
        List<Employee> list2 = this.getAllEmployee();
        System.out.println("------------学校总部员工------------");
        for (Employee e : list2) {
            System.out.println(e.getId());
        }
    }
}
```


## 三大特性

### 封装

封装是面向对象方法的重要原则，就是把对象的属性和操作（或服务）结合为一个独立的整体，并尽可能隐藏对象的内部实现细节.简单的说,一个类就是一个封装了数据以及操作这些数据的代码的逻辑实体。在一个对象内部，**某些代码或某些数据可以是私有的**，不能被外界访问。通过这种方式，对象对内部数据提供了不同级别的保护，以防止程序中无关的部分意外的改变或错误的使用了对象的私有部分。


**封装的目的是增强安全性和简化编程,使用者不必了解具体的实现细节,而只是要通过外部接口,以特定的访问权限来使用类的成员.**

#### 优点

-  良好的封装能够减少耦合;提高了可维护性和灵活性以及可重用性;
-  类内部的结构可以自由修改;
- 可以对成员变量进行更精确的控制;
-  隐藏信息，实现细节;

#### 访问权限

Java的封装可以通过修改属性的可见性限制对属性的访问来体现.

**Java 中有三个访问权限修饰符：private、protected 以及 public，如果不加访问修饰符，表示包级可见(default)。**


修饰符 | 当前类 | 同一包下 | 其他包的子类|  不同包的子类 | 其他包
---|---|---|---|---|---
public | Y | Y | Y | Y | Y 
protected | Y | Y | Y | Y/N | N
default | Y | Y | Y | N | N
private | Y | N | N | N | N
这四种访问权限的控制符能够控制类中成员的可见性.当然需要满足在不使用Java反射的情况下.

**注意**
- `protected`用于修饰成员,表示在继承体系中成员对于子类可见.如果不存在继承关系则不能访问`protected`修饰的实例.
- 类可见表示其它类可以用这个类创建实例对象;
- 成员可见表示其它类可以用这个类的实例对象访问到该成员;

设计良好的模块会隐藏所有的实现细节，把它的 API 与它的实现清晰地隔离开来。模块之间只通过它们的 API 进行通信，一个模块不需要知道其他模块的内部工作情况，这个概念被称为**信息隐藏或封装**。因此**访问权限应当尽可能地使每个类或者成员不被外界访问**。

**如果子类的方法重写了父类的方法，那么子类中该方法的访问级别不允许低于父类的访问级别**。这是为了确保可以使用父类实例的地方都可以使用子类实例，也就是确保满足**里氏替换原则**。

**某个类的字段决不能是公有的，因为这么做的话就失去了对这个字段修改行为的控制，其他类可以对其随意修改。**
例如下面的例子中，``AccessExample``拥有id公有字段，如果在某个时刻，我们想要使用`int`存储`id`字段，那么就需要修改所有类中的代码。

```java
public class AccessExample {
    public String id;
    // public int id;
}
```

可以使用公有的 ``getter`` 和 ``setter`` 方法来替换公有字段，这样的话就可以控制对字段的修改行为。实现了封装

```java
public class AccessExample {

    private int id;

    public String getId() {
        return id + "";
    }

    public void setId(String id) {
        this.id = Integer.valueOf(id);
    }
}
```

**但是也有例外，如果是包级私有的类或者私有的嵌套类，那么直接暴露成员不会有特别大的影响。**

```java
public class AccessWithInnerClassExample {

    private class InnerClass {
        int x;
    }

    private InnerClass innerClass;

    public AccessWithInnerClassExample() {
        innerClass = new InnerClass();
    }

    public int getValue() {
        return innerClass.x;  // 直接访问
    }
}
```


### 继承

继承可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。通过继承创建的新类称为“子类”或“派生类”，被继承的类称为“基类”、“父类”或“超类”。继承的过程，就是从一般到特殊的过程.**要实现继承，可以通过“继承”（Inheritance）和“组合”（Composition）来实现.** 继承概念的实现方式有两类：实现继承与接口继承。实现继承是指直接使用基类的属性和方法而无需额外编码的能力；接口继承是指仅使用属性和方法的名称、但是子类必须提供实现的能力.

> 继承: 如果多个类的某个部分的功能相同,那么可以抽象出一个类来,把相同的部分放到父类中,让他们继承这个类

> 实现：如果多个类处理的目标是一样的，但是处理的方法方式不同，那么就定义一个接口，也就是一个**标准**，让他们的实现这个接口，各自实现自己具体的处理方法来处理那个目标

**继承的根本原因是因为要复用，而实现的根本原因是需要定义一个标准.**

#### 继承与组合

继承是实现复用代码的重要手段,但是继承会破坏封装.组合也是代码复用的重要方式,可以提供良好的封装性.

##### 实现继承

```java
// 继承

public class MainTest {

    public static void main(String[] args) {
        B b = new B();
        b.test();
    }
}

class A {

    protected int i;

    protected void test() {
        System.out.println("I am super class ... ");
    }

}

class B  extends A{

    // 调用父类成员 
    public void t() {
        System.out.println(i);
    }

}
```
通过以上代码,可以发现,子类可以访问父类的成员变量方法,并且通过重写可以改变父类方法实现.从而破坏了封装性.

> 在继承结构中，父类的内部细节对于子类是可见的。所以我们通常也可以说通过继承的代码复用是一种**白盒式代码复用**。（如果基类的实现发生改变，那么派生类的实现也将随之改变。这样就导致了子类行为的不可预知性；）

为了保证父类有良好的封装性,不会对子类随意更改,设计父类时应遵循以下原则:
> - 尽量隐藏父类的内部数据.尽量把所有父类的所有成员变量都用`private`修饰,不要让子类直接访问父类的成员.
> -  不要让子类随意的修改访问父类的方法.父类中那些仅为辅助其他的工具方法,应该使用private修饰,让子类无法访问该方法;如果父类中的方法需要被外部类调用,则需以public修饰,但又不希望重写父类方法可以使用final来修饰方法;但如果希望父类某个方法被重写,但又不希望其他类访问自由,可以使用protected修饰.
> - 尽量不要在父类构造器中调用将要被子类重写的方法.


继承是类与类或者接口与接口之间最常见的关系,继承是一种`is-a`关系。

##### 实现组合
```java

public class MainTest {

    public static void main(String[] args) {
        B b = new B(new A());
        b.test();
    }
}

class A {

    protected int i;

    protected void test() {
        System.out.println("I am super class ... ");
    }

}

class B {

    private final A a;

    public B(A a) {
        this.a = a;
    }
    public void test() {
        // 复用 A 类提供的 test 方法
        a.test();
    }
}
```
组合是把旧类对象作为新类对象的成员变量组合进来,用以实现新类的功能.
> 组合是通过对现有的对象进行拼装（组合）产生新的、更复杂的功能。因为在对象之间，各自的内部细节是不可见的，所以我们也说这种方式的代码复用是**黑盒式代码复用**。（因为组合中一般都定义一个类型，所以在编译期根本不知道具体会调用哪个实现类的方法）

组合强调的是整体与部分、拥有的关系，即`has-a`的关系.

##### 比较
> 继承，在写代码的时候就要指名具体继承哪个类，所以，在编译期就确定了关系。（从基类继承来的实现是无法在运行期动态改变的，因此降低了应用的灵活性。）

> 组合，在写代码的时候可以采用面向接口编程。所以，类的组合关系一般在运行期确定。

组合 | 继承
---|---
优点：不破坏封装，整体类与局部类之间松耦合，彼此相对独立 | 缺点：破坏封装，子类与父类之间紧密耦合，子类依赖于父类的实现，子类缺乏独立性
优点：具有较好的可扩展性 | 缺点：支持扩展，但是往往以增加系统结构的复杂度为代价
优点：支持动态组合。在运行时，整体对象可以选择不同类型的局部对象 | 缺点：不支持动态继承。在运行时，子类无法选择不同的父类
优点：整体类可以对局部类进行包装，封装局部类的接口，提供新的接口 | 缺点：子类不能改变父类的接口
缺点：整体类不能自动获得和局部类同样的接口 | 优点：子类能自动继承父类的接口
缺点：创建整体类的对象时，需要创建所有局部类的对象 | 优点：创建子类的对象时，无须创建父类的对象

##### 使用选择
经过以上比较,可以得出结论: 组合比继承更加灵活.所以在写代码如果这个功能组合和继承都能够完成,那么应该优先选择组合.
但是继承在一些场景还是要优先于组合的.
> - 继承要慎用，其使用场合仅限于你确信使用该技术有效的情况。一个判断方法是，问一问自己是否需要从新类向基类进行向上转型。如果是必须的，则继承是必要的。反之则应该好好考虑是否需要继承。
> - 只有当子类真正是超类的子类型时，才适合用继承。换句话说，对于两个类A和B，只有当两者之间确实存在is-a关系的时候，类B才应该继承类A。

#### super
- 访问父类的构造函数：可以使用``super()``函数访问父类的构造函数，从而委托父类完成一些初始化的工作。**应该注意到，子类一定会调用父类的构造函数来完成初始化工作，一般是调用父类的默认构造函数**，**如果子类需要调用父类其它构造函数，那么就可以使用super函数。**
- 访问父类的成员：如果子类重写了父类的某个方法，可以通过使用 `super `关键字来引用父类的方法实现。

```java
public class SuperExample {

    protected int x;
    protected int y;

    public SuperExample(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public void func() {
        System.out.println("SuperExample.func()");
    }
}
public class SuperExtendExample extends SuperExample {

    private int z;

    public SuperExtendExample(int x, int y, int z) {
        super(x, y);
        this.z = z;
    }

    @Override
    public void func() {
        super.func();
        System.out.println("SuperExtendExample.func()");
    }
}
SuperExample e = new SuperExtendExample(1, 2, 3);
e.func();
SuperExample.func()
SuperExtendExample.func()
```

#### 抽象类与接口
抽象类和接口也是Java继承体系中的重要组成部分.抽象类是用来捕捉子类的通用特性的，而接口则是抽象方法的集合；抽象类不能被实例化，只能被用作子类的超类，是被用来创建继承层级里子类的模板，而接口只是一种形式，接口自身不能做任何事情。

##### 抽象类

**抽象类和抽象方法都使用`abstract`关键字进行声明。如果一个类中包含抽象方法，那么这个类必须声明为抽象类。**

抽象类和普通类最大的区别是，抽象类不能被实例化，需要继承抽象类才能实例化其子类。

```java
public abstract class AbstractClassExample {

    protected int x;
    private int y;

    public abstract void func1();

    public void func2() {
        System.out.println("func2");
    }
}
public class AbstractExtendClassExample extends AbstractClassExample {
    @Override
    public void func1() {
        System.out.println("func1");
    }
}

// 实例化抽象类
// AbstractClassExample ac1 = new AbstractClassExample(); 
// 实例化抽象类子类
// AbstractClassExample ac2 = new AbstractExtendClassExample();
// ac2.func1();
```

##### 接口

**接口是抽象类的延伸，在 Java 8 之前，它可以看成是一个完全抽象的类，也就是说它不能有任何的方法实现。**

**从 Java 8 开始**，**接口也可以拥有默认的方法实现**，这是因为不支持默认方法的接口的维护成本太高了。在 Java 8 之前，如果一个接口想要添加新的方法，那么要修改所有实现了该接口的类,现在不用修改所有实现该接口的类.

接口的成员（字段 + 方法）默认都是`public`的，并且不允许定义为`private`或者 `protected`。

接口的字段默认都是用`static`和`final`修饰的.

```java
public interface InterfaceExample {

    void func1();

    default void func2(){
        System.out.println("func2");
    }

    int x = 123;
    // int y;               // Variable 'y' might not have been initialized
    public int z = 0;       // Modifier 'public' is redundant for interface fields
    // private int k = 0;   // Modifier 'private' not allowed here
    // protected int l = 0; // Modifier 'protected' not allowed here
    // private void fun3(); // Modifier 'private' not allowed here
}
public class InterfaceImplementExample implements InterfaceExample {
    @Override
    public void func1() {
        System.out.println("func1");
    }
}

// InterfaceExample ie1 = new InterfaceExample(); // 'InterfaceExample' is abstract; cannot be instantiated
InterfaceExample ie2 = new InterfaceImplementExample();
ie2.func1();//func1
System.out.println(InterfaceExample.x);//123
```

Java的接口可以多继承

```java
interface Action extends Serializable,AutoCloseable {
	// to do ...
}
```


##### 比较

- 从设计层面上看，抽象类提供了一种`is-a` 关系，那么就必须满足里式替换原则，即子类对象必须能够替换掉所有父类对象。而接口更像是一种 `like-a` 关系，它只是提供一种方法实现契约，并不要求接口和实现接口的类具有 `is-a` 关系。
- 从使用上来看，一个类可以实现多个接口，但是不能继承多个抽象类。
- 接口的字段只能是`static`和`final`类型的，而抽象类的字段没有这种限制。
- 接口的成员只能是`public`的，而抽象类的成员可以有多种访问权限。

##### 使用选择

使用接口：
- 需要让不相关的类都实现一个方法，例如:不相关的类都可以实现 ``Compareable`` 接口中的 ``compareTo()`` 方法；
- 需要使用多重继承。

使用抽象类：
- 需要在几个相关的类中共享代码。
- 需要能控制继承来的成员的访问权限，而不是都为`public`。
- 需要继承非静态和非常量字段。

**在很多情况下，接口优先于抽象类。因为接口没有抽象类严格的类层次结构要求，可以灵活地为一个类添加行为。并且从 Java 8 开始，接口也可以有默认的方法实现，使得修改接口的成本也变的很低。**

### 多态

多态即多种表现形态;同一个行为具有多个不同表现形式或形态的能力.

多态存在的前提

- 有类继承或者接口实现
- 子类要重写父类的方法
- 父类的引用指向子类的对象;`Parent p = new Child();`

简单说来: 父类引用指向子类对象，调用方法时会调用子类的实现，而不是父类的实现，称为多态.
```java
class Parent {

    void contextLoads(){
        System.out.println("i am Parent ... ");
    }
}
class Child  extends Parent {
    @Override
    void contextLoads(){
        System.out.println("i am Child ... ");
    }
}
class mainTest{
    public static void main(String[] args) {
        Parent child = new Child();
        // i am Child ... 
        child.contextLoads();
    }
}
```

#### 优缺点
优点

- 消除类型之间的耦合关系
- 可替换性
- 可扩充性
- 接口性
- 灵活性
- 简化性

缺点

不能使用子类特有的方法和属性.在编写代码期间使用多态调用方法或属性时，编译工具首先会检查父类中是否有该方法和属性，如果没有，则会编译报错。
```java
class Parent {
    void contextLoads(){
        System.out.println("i am Parent ... ");
    }
}
class Child  extends Parent {

    String  c = "child";

    @Override
    void contextLoads(){
        System.out.println("i am Child ... ");
    }
    void test() {
        System.out.println("i am test method ...");
    }
}
class mainTest{
    public static void main(String[] args) {
        Parent child = new Child();
        // 编译报错: 无法解析 'Parent' 中的方法 'test'
        child.test();
        // 编译报错: 不能解决符号 'c'
        child.c;
    }
}
```


#### 重写与重载

##### 重写

**重写(Override)存在于继承体系中，指子类实现了一个与父类在方法声明上完全相同的一个方法。**

> 为了满足里式替换原则，重写有以下三个限制：
>
> - 子类方法的访问权限必须大于等于父类方法；
> - 子类方法的返回类型必须是父类方法返回类型或为其子类型。
> - 子类方法抛出的异常类型必须是父类抛出异常类型或为其子类型。

使用`@Override`注解，可以让编译器帮忙检查是否满足上面的三个限制条件。


下面的示例中，``SubClass ``为 ``SuperClass`` 的子类，``SubClass`` 重写了 ``SuperClass`` 的 ``func()`` 方法。其中：

- **子类方法访问权限为`public`，大于父类的`protected`。**
- **子类的返回类型为``ArrayList``，是父类返回类型`List`的子类。**
- **子类抛出的异常类型为 ``Exception``，是父类抛出异常 ``Throwable`` 的子类。**
- **子类重写方法使用``@Override``注解，从而让编译器自动检查是否满足限制条件。**

```java
class SuperClass {
    protected List<Integer> func() throws Throwable {
        return new ArrayList<>();
    }
}

class SubClass extends SuperClass {
    @Override
    public ArrayList<Integer> func() throws Exception {
        return new ArrayList<>();
    }
}
```



在调用一个方法时，先从本类中查找看是否有对应的方法，如果没有查找到再到父类中查看，看是否有继承来的方法。否则就要对参数进行转型，转成父类之后看是否有对应的方法。总的来说，方法调用的优先级为：

- ``this.func(this)``
- ``super.func(this)``
- ``this.func(super)``
- ``super.func(super)``

```java
/*继承关系
    A
    |
    B
    |
    C
    |
    D
 */


class A {

    public void show(A obj) {
        System.out.println("A.show(A)");
    }

    public void show(C obj) {
        System.out.println("A.show(C)");
    }
}

class B extends A {

    @Override
    public void show(A obj) {
        System.out.println("B.show(A)");
    }
}

class C extends B {
}

class D extends C {
}
class  mainTest{
    public static void main(String[] args) {

        A a = new A();
        B b = new B();
        C c = new C();
        D d = new D();

        // 在 A 中存在 show(A obj)，直接调用
        a.show(a); // A.show(A)
        // 在 A 中不存在 show(B obj)，将 B 转型成其父类 A
        a.show(b); // A.show(A)
        // 在 B 中存在从 A 继承来的 show(C obj)，直接调用
        b.show(c); // A.show(C)
        // 在 B 中不存在 show(D obj)，但是存在从 A 继承来的 show(C obj)，将 D 转型成其父类 C
        b.show(d); // A.show(C)

        // 引用的还是 B 对象，所以 ba 和 b 的调用结果一样
        A ba = new B();
        ba.show(c); // A.show(C)
        ba.show(d); // A.show(C)
    }
}
```

##### 重载

**重载(overload)是在一个类里面，方法名字相同，但是参数类型、个数、顺序至少有一个不同。返回类型可以相同也可以不同。应该注意的是，返回值不同，其它都相同不算是重载。**

**每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。** 最常用的地方就是构造器的重载。

> **重载规则:**
>
> - 被重载的方法必须改变参数列表(参数个数或类型不一样)；
> - 被重载的方法可以改变返回类型；
> - 被重载的方法可以改变访问修饰符；
> - 被重载的方法可以声明新的或更广的检查异常；
> - 方法能够在同一个类中或者在一个子类中被重载。
> - 无法以返回值类型作为重载函数的区分标准。



```java
public class Overloading {
    public int test(){
        System.out.println("test1");
        return 1;
    }
 
    public void test(int a){
        System.out.println("test2");
    }   
 
    //以下两个参数类型顺序不同
    public String test(int a,String s){
        System.out.println("test3");
        return "returntest3";
    }   
 
    public String test(String s,int a){
        System.out.println("test4");
        return "returntest4";
    }   
 
    public static void main(String[] args){
        Overloading o = new Overloading();
        System.out.println(o.test());
        o.test(1);
        System.out.println(o.test(1,"test3"));
        System.out.println(o.test("test4",1));
    }
}
```

**方法的重写(Override)和重载(Overload)是Java多态性的不同表现，重写是父类与子类之间多态性的一种表现，重载可以理解成多态的具体表现形式**

> - 方法重载是一个类中定义了多个方法名相同,而他们的参数的数量不同或数量相同而类型和次序不同,则称为方法的重载(Overloading)。
> - 方法重写是在子类存在方法与父类的方法的名字相同,而且参数的个数与类型一样,返回值也一样的方法,就称为重写(Overriding)。
> - 方法重载是一个类的多态性表现,而方法重写是子类与父类的一种多态性表现。

## Java类加载机制

### 类加载过程
Java 的类加载过程可以分为5个阶段：加载、验证、准备、解析和初始化。其中验证,准备,解析统称为连接。这5个阶段一般是顺序发生的，但在动态绑定的情况下，解析阶段发生在初始化阶段之后。

需要类加载器寻找类的字节码文件，并构造出类在JVM内部表示的对象组件。在Java中，[类加载器](#类加载器)把一个类装入JVM中，要经过以下步骤：

#### 加载
> 加载阶段是类加载过程的第一个阶段。在这个阶段，JVM 的主要目的是将字节码从各个位置（网络、磁盘等）转化为二进制字节流加载到内存中，接着会为这个类在 JVM 的方法区创建一个对应的 Class 对象，这个 Class 对象就是这个类各种数据的访问入口。

类的加载指的是将类的`.class`文件中的二进制数据读入到内存中，将其放在运行时数据区的方法区内，然后在堆区创建一个`java.lang.Class`对象，用来封装类在方法区内的数据结构.简单来说，加载指的是把class字节码文件从各个来源通过类加载器装载入内存中。

类加载器并不需要等到某个类被“首次主动使用”时再加载它，JVM规范允许类加载器在预料某个类将要被使用时就预先加载它，如果在预先加载的过程中遇到了`.class`文件缺失或存在错误，类加载器必须在程序首次主动使用该类时才报告错误（`LinkageError`错误）如果这个类一直没有被程序主动使用，那么类加载器就不会报告错误。

 JVM不是一开始就把所有的类都加载进内存中，而是只有第一次遇到某个需要运行的类时才会加载，且只加载一次。

JVM在类加载阶段作用
- 通过类的全限定名获取该类的二进制字节流
- 将字节流所代表的存储结构转化为方法区的运行时的数据结构
- 在内存中生成一个该类的`java.lang.Class`对象作为方法区的这个类的各种数据访问入口.

#### 验证
JVM会在该阶段对二进制字节流进行校验，只有符合JVM字节码规范的才能被 JVM 正确执行。

大致都会完成以下四个阶段的验证
- 文件格式验证
- 元数据验证,是否符合java语言的规范
- 字节码验证,确保程序语义合法,符合逻辑
- 符号引用验证,确保下一步解析能正常执行

#### 准备
为静态变量在方法取分配内存,并设置默认初始值。将在方法区中进行分配.

举个例子:
```java
public String var1 = "var1";
public static String var2 = "var2";
public static final String var3 = "var3";
```
变量`var1`不会被分配内存,但是`var2`会被分配.`var2`会被分配初始值为`null`而不是'var2'.

这里所设置的初始值通常情况下是数据类型默认的零值（如`0、0L、null、false`等），而不是被在Java代码中被显式地赋予的值。

实例变量会在对象实例化时随着对象一块分配在Java堆中。

这里不包含`final`修饰的`static`,因为`final`在编译的时候就已经分配了.也就是说`var3`被分配的值为'var3'

#### 解析
虚拟机将常量池中的**符号引用**替换为**直接引用**.

*符号引用*

符号引用是编译原理中的概念，是相对于直接引用来说的。主要包括了以下三类常量： 类和接口的全限定名 字段的名称和描述符 方法的名称和描述符.

> 符号引用 ：符号引用以一组符号来描述所引用的目标。符号引用可以是任何形式的字面量，只要使用时能无歧义地定位到目标即可，符号引用和虚拟机的布局无关。

在编译的时候每个java类都会被编译成一个class文件，但在编译的时候虚拟机并不知道所引用类的地址，所以就用符号引用来代替，而在这个解析阶段就是为了把这个符号引用转化成为真正的地址的阶段。

*直接引用*

直接引用和虚拟机的布局是相关的，不同的虚拟机对于相同的符号引用所翻译出来的直接引用一般是不同的。如果有了直接引用，那么直接引用的目标一定被加载到了内存中。

直接引用通过对符号引用进行解析，找到引用的实际内存地址.

#### 初始化
在准备阶段，静态变量已经被赋过默认初始值，而在初始化阶段，静态变量将被赋值为代码期望赋的值.

举个例子
```java
public static String var2 = "var2";
```
在准备阶段变量`var2`的值为`null`,在初始化阶段值为'var2'.

在Java中对类变量进行初始值设定有两种方式：
- 声明类变量时指定初始值
- 使用静态代码块为类变量指定初始值

##### 初始化步骤
- 如果这个类还没有被加载和连接，则程序先加载并连接该类
- 如果该类的直接父类还没有被初始化，则先初始化其直接父类
- 如果类中有初始化语句，则系统依次执行这些初始化语句

##### 何时初始化
- 创建类的实例，也就是`new`一个对象需要初始化
- 读取或者设置静态字段的时候需要初始化(但被`final`修饰的字段,在编译时就被放入静态常量池的字段除外.)
- 调用类的静态方法
- 使用反射`Class.forName("");`对类反射调用的时候,该类需要初始化
- 初始化一个类的时候,有父类,先初始化父类
    - 接口除外,父接口在调用的时候才会被初始化;
    - 子类引用父类的静态字段,只会引发父类的初始化;
- 被标明为启动类的类(即包含`main()`方法),需要初始化    

##### 初始化顺序
存在继承关系的代码中,初始化顺序
```
父类静态域 --> 子类静态域 --> 父类成员初始化 -->父类构造块 --->父类构造方法 -->子类成员初始化 -->子类构造块 -->子类构造方法
```
`静态域是指静态代码块和静态变量`

一些初始化规则:
> - 类从顶至底的顺序初始化，所以声明在顶部的字段的早于底部的字段初始化
>- 超类早于子类和衍生类的初始化
>- 如果类的初始化是由于访问静态域而触发，那么只有声明静态域的类才被初始化，而不会触发超类的初始化或者子类的
>- 初始化即使静态域被子类或子接口或者它的实现类所引用。
>- 接口初始化不会导致父接口的初始化。
>- 静态域的初始化是在类的静态初始化期间，非静态域的初始化时在类的实例创建期间。这意味这静态域初始化在非静态域之前。
>- 非静态域通过构造器初始化，子类在做任何初始化之前构造器会隐含地调用父类的构造器，他保证了非静态或实例变量（父类）初始化早于子类

### 类加载器
JVM设计者把**类加载阶段中的"通过'类全名'来获取定义此类的二进制字节流"** 这个动作放到Java虚拟机外部去实现，以便让应用程序自己决定如何去获取所需要的类。实现这个动作的代码模块称为“类加载器”。

类加载器。一般包括**启动类加载器，扩展类加载器，应用类加载器，以及用户的自定义类加载器.**

#### 双亲委派模型
从虚拟机的角度来说，只存在两种不同的类加载器：一种是启动类加载器(`Bootstrap ClassLoader`)，该类加载器使用C++语言实现(这里仅限于`Hotspot`，也就是JDK1.5之后默认的虚拟机，有很多其他的虚拟机是用Java语言实现的)，属于虚拟机自身的一部分。另外一种就是所有其它的类加载器，这些类加载器是由Java语言实现，独立于JVM外部，并且全部继承自抽象类`java.lang.ClassLoader。`

站在Java开发人员的角度来看，类加载器可以大致划分为以下三类:

- 启动类加载器：Bootstrap ClassLoader，跟上面相同。它负责加载存放在`JDK\jre\lib`(JDK代表JDK的安装目录，下同)下，或被`-Xbootclasspath`参数指定的路径中的，并且能被虚拟机识别的类库（如`rt.jar`，所有的`java.*`开头的类均被`Bootstrap ClassLoader`加载）。启动类加载器是无法被Java程序直接引用的。


- 扩展类加载器：Extension ClassLoader，该加载器由`sun.misc.Launcher$ExtClassLoader`实现，它负责加载`JDK\jre\lib\ext`目录中，或者由`java.ext.dirs`系统变量指定的路径中的所有类库（如`javax.*`开头的类），开发者可以直接使用扩展类加载器。


- 应用程序类加载器：Application ClassLoader，该类加载器由`sun.misc.Launcher$AppClassLoader`来实现，它负责加载用户类路径（ClassPath）所指定的类，开发者可以直接使用该类加载器，如果应用程序中没有自定义过自己的类加载器，**一般情况下这个就是程序中默认的类加载器。**


![类加载器](https://img-blog.csdn.net/20140105211242593)

 这种层次关系称为**类加载器的双亲委派模型。** 我们把每一层上面的类加载器叫做当前层类加载器的父加载器，当然，它们之间的父子关系并不是通过继承关系来实现的，而是使用组合关系来复用父加载器中的代码。该模型在JDK1.2期间被引入并广泛应用于之后几乎所有的Java程序中，但它并不是一个强制性的约束模型，而是Java设计者们推荐给开发者的一种类的加载器实现方式。

双亲委派模型的工作流程是：如果一个类加载器收到了类加载的请求，它首先不会自己去尝试加载这个类，而是把请求委托给父加载器去完成，依次向上，因此，所有的类加载请求最终都应该被传递到顶层的启动类加载器中，只有当父加载器在它的搜索范围中没有找到所需的类时，即无法完成该加载，子加载器才会尝试自己去加载该类。

使用这种模型来组织类加载器之间的关系的好处是Java类随着它的类加载器一起具备了一种带有优先级的层次关系。例如`java.lang.Object`类，无论哪个类加载器去加载该类，最终都是由启动类加载器进行加载，因此Object类在程序的各种类加载器环境中都是同一个类。否则的话，如果不使用该模型的话，如果用户自定义一个`java.lang.Object`类且存放在`classpath`中，那么系统中将会出现多个Object类，应用程序也会变得很混乱。如果我们自定义一个`rt.jar`中已有类的同名Java类，会发现JVM可以正常编译，但该类永远无法被加载运行。

在`rt.jar`包中的`java.lang.ClassLoader`类中，我们可以查看类加载实现过程`loadClass`方法的代码，具体源码如下：
```java
    protected Class<?> loadClass(String name, boolean resolve)
        throws ClassNotFoundException
    {
        synchronized (getClassLoadingLock(name)) {
            // First, check if the class has already been loaded
            // 首先检查该name指定的class是否有被加载
            Class<?> c = findLoadedClass(name);
            if (c == null) {
                long t0 = System.nanoTime();
                try {
                    if (parent != null) {
                   // 如果parent不为null，则调用parent的loadClass进行加载
                        c = parent.loadClass(name, false);
                    } else {
                    // parent为null，则调用BootstrapClassLoader进行加载  
                        c = findBootstrapClassOrNull(name);
                    }
                } catch (ClassNotFoundException e) {
                   // 如果从非空父类加载器中找不到类，则抛出ClassNotFoundException
                }

                if (c == null) {
                // 如果仍然无法加载成功，则调用自身的findClass进行加载 
                    long t1 = System.nanoTime();
                    c = findClass(name);

                   // 这是定义类加载器；记录统计数据
                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);
                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
                    sun.misc.PerfCounter.getFindClasses().increment();
                }
            }
            if (resolve) {
                resolveClass(c);
            }
            return c;
        }
    }
```

根据代码以及代码中的注释可以很清楚地了解整个过程：先检查是否已经被加载过，如果没有则调用父加载器的`loadClass()`方法，如果父加载器为空则默认使用启动类加载器作为父加载器。如果父类加载器加载失败，则先抛出`ClassNotFoundException`,然后再调用自己的`findClass()`方法进行加载。

#### 自定义类加载器

>ps 为什么会有自定义类加载器？

- 一方面是由于java代码很容易被反编译，如果需要对自己的代码加密的话，可以对编译后的代码进行加密，然后再通过实现自己的自定义类加载器进行解密，最后再加载。
- 另一方面也有可能从非标准的来源加载代码，比如从网络来源，那就需要自己实现一个类加载器，从指定源进行加载。

若要实现自定义类加载器，只需要继承`java.lang.ClassLoader`类.按需重写相关方法即可.
通过对上边`Classloader`类中`loadClass()`源码分析,可以看出
- 如果不想打破双亲委派模型，那么只需要重写`findClass`方法
- 如果想打破双亲委派模型，那么就重写整个`loadClass`方法

> **在JDK1.2之前，类加载尚未引入双亲委派模式，因此实现自定义类加载器时常常重写`loadClass`方法，提供双亲委派逻辑，从JDK1.2之后，双亲委派模式已经被引入到类加载体系中，自定义类加载器时不需要在自己写双亲委派的逻辑，因此不鼓励重写`loadClass`方法，而推荐重写`findClass`方法。**
>
>**在Java中，任意一个类都需要由加载它的类加载器和这个类本身一同确定其在java虚拟机中的唯一性，即比较两个类是否相等，只有在这两个类是由同一个类加载器加载的前提之下才有意义，否则，即使这两个类来源于同一个Class类文件，只要加载它的类加载器不相同，那么这两个类必定不相等(这里的相等包括代表类的Class对象的`equals()`方法、`isAssignableFrom()`方法、`isInstance()`方法和`instanceof`关键字的结果)。**

**重写`findClass`方法**

准备一个class文件，编译后放到C盘根目录下
```java
public class People {
	private String name;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}

```
自定义类加载器,继承`ClassLoader`重写`findClass`方法（其中`defineClass`方法可以把二进制流字节组成的文件转换为一个`java.lang.Class`）
```java
public class MyClassLoader extends ClassLoader
{
    public MyClassLoader(){}
    
    public MyClassLoader(ClassLoader parent)
    {
        super(parent);
    }
    
    protected Class<?> findClass(String name) throws ClassNotFoundException
    {
    	File file = new File("C:/People.class");
        try{
            byte[] bytes = getClassBytes(file);
            //defineClass方法可以把二进制流字节组成的文件转换为一个java.lang.Class
            Class<?> c = this.defineClass(name, bytes, 0, bytes.length);
            return c;
        } 
        catch (Exception e)
        {
            e.printStackTrace();
        }
        
        return super.findClass(name);
    }
    
    private byte[] getClassBytes(File file) throws Exception
    {
        // 这里要读入.class的字节，因此要使用字节流
        FileInputStream fis = new FileInputStream(file);
        FileChannel fc = fis.getChannel();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        WritableByteChannel wbc = Channels.newChannel(baos);
        ByteBuffer by = ByteBuffer.allocate(1024);
        
        while (true){
            int i = fc.read(by);
            if (i == 0 || i == -1)
            break;
            by.flip();
            wbc.write(by);
            by.clear();
        }
        fis.close();
        return baos.toByteArray();
    }
}

```

## 设计模式
> 设计模式是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结，使用设计模式是为了可重用代码、让代码更容易被他人理解并且保证代码可靠性。
>
> 虽然[GoF](https://baike.baidu.com/item/GoF/6406151?fr=aladdin)设计模式只有23个，但是它们各具特色，每个模式都为某一个可重复的设计问题提供了一套解决方案。**根据它们的用途，设计模式可分为创建型，结构型和行为型三种**，其中创建型模式主要用于描述如何创建对象，结构型模式主要用于描述如何实现类或对象的组合，行为型模式主要用于描述类或对象怎样交互以及怎样分配职责;在GoF23种设计模式中包含5种创建型设计模式、7种结构型设计模式和11种行为型设计模式。此外，根据某个模式主要是用于处理类之间的关系还是对象之间的关系，设计模式还可以分为类模式和对象模式。

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性、高内聚低耦合。

**摘自[常用23种设计模式+简单工厂模式一览表](https://blog.csdn.net/lovelion/article/details/7420863)**

<table>
    <tr>
        <th rowspan="1">设计模式类型</th>
        <th colspan="1">设计模式名称</th>
        <th colspan="1">介绍</th>
        <th colspan="1">学习难度</th>
        <th colspan="1">使用频率</th>
    </tr>
    <tr>
        <td rowspan="6">创建型模式(6种)</td>
        <td><a href="#单例模式">单例模式</a></td>
        <td>保证一个类仅有一个对象，并提供一个访问它的全局访问点。</td>
        <td>★☆☆☆☆</td>
        <td>★★★★☆</td>
    </tr>
    <tr>
        <td><a href="#简单工厂模式">简单工厂模式</a></td>
        <td>定义一个工厂类，它可以根据参数的不同返回不同类的实例，被创建的实例通常都具有共同的父类。</td>
        <td>★★☆☆☆</td>
        <td>★★★★★</td>
    </tr>
    <tr>
        <td><a href="#工厂方法模式">工厂方法模式</a></td>
        <td>定义一个用于创建对象的接口，让子类决定将哪一个类实例化。</td>
        <td>★★☆☆☆</td>
        <td>★★★★★</td>
    </tr>
    <tr>
        <td><a href="#抽象工厂模式">抽象工厂模式</a></td>
        <td>提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们的具体类。</td>
        <td>★★★★☆</td>
        <td>★★★★★</td>
    </tr>
    <tr>
        <td><a href="#原型模式">原型模式</a></td>
        <td>使用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。</td>
        <td>★★★☆☆</td>
        <td>★★★☆☆</td>
    </tr>
    <tr>
        <td><a href="#建造者模式">建造者模式</a></td>
        <td>将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。</td>
        <td>★★★★☆</td>
        <td>★★☆☆☆</td>
    </tr>
    <tr>
        <td rowspan="7">结构型模式(7种)</td>
        <td><a href="#适配器模式">适配器模式</a></td>
         <td>将一个类的接口转换成客户希望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</td>
        <td>★★☆☆☆</td>
        <td>★★★★☆</td>
    </tr>
    <tr>
        <td>桥接模式</td>
        <td>将抽象部分与它的实现部分分离，使他们都可以独立地变化。</td>
        <td>★★★☆☆</td>
        <td>★★★☆☆</td>
    </tr>
    <tr>
        <td>组合模式</td>
        <td>组合多个对象形成树形结构以表示具有“整体—部分”关系的层次结构。组合模式对单个对象和组合对象的使用具有一致性。</td>
        <td>★★★☆☆</td>
        <td>★★★★☆</td>
    </tr>
    <tr>
        <td>装饰模式</td>
        <td>动态地给一个对象增加一些额外的职责，就增加对象功能来说，装饰模式比生成子类实现更为灵活。</td>
        <td>★★★☆☆</td>
        <td>★★★☆☆</td>
    </tr>
    <tr>
        <td><a href="#外观模式">外观模式</a></td>
        <td>为子系统中的一组接口提供一个统一的入口。外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。</td>
        <td>★☆☆☆☆</td>
        <td>★★★★★</td>
    </tr>
    <tr>
        <td>享元模式</td>
        <td>运用共享技术有效地支持大量细粒度的对象。</td>
        <td>★★★★☆</td>
        <td>★☆☆☆☆</td>
    </tr>
    <tr>
        <td><a href="#代理模式">代理模式</a></td>
        <td>为其他对象提供一个代理以控制对这个对象的访问。</td>
        <td>★★★☆☆</td>
        <td>★★★★☆</td>
    </tr>
    <tr>
        <td rowspan="11">行为模式(11种)</th>
        <td>职责链模式</td>
        <td>为解除请求的发送者和接收者之间的耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链传递该请求，直到有对象处理它。</td>
        <td>★★★☆☆</td>
        <td>★★☆☆☆</td>
    </tr>
    <tr>
        <td>命令模式</td>
        <td>将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及支持可取消的操作。</td>
        <td>★★★☆☆</td>
        <td>★★★★☆</td>
    </tr>
    <tr>
        <td>解释器模式</td>
        <td>定义一个语言，定义它的文法的一种表示，并定义一个解释器，该解释器使用该表示来解释语言中的句子。</td>
        <td>★★★★★</td>
        <td>★☆☆☆☆</td>
    </tr>
    <tr>
        <td><a href="#迭代器模式">迭代器模式</a></td>
        <td>提供一种方法顺序访问一个聚合对象中各个元素，而又不需暴露该对象的内部表示。</td>
        <td>★★★☆☆</td>
        <td>★★★★★</td>
    </tr>
    <tr>
        <td>中介者模式</td>
        <td>用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显示地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。</td>
        <td>★★★☆☆</td>
        <td>★★☆☆☆</td>
    </tr>
    <tr>
        <td>备忘录模式</td>
        <td>在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保持该状态，这样以后就可以将该对象恢复到保存的状态。</td>
        <td>★★☆☆☆</td>
        <td>★★☆☆☆</td>
    </tr>
    <tr>
        <td>观察者模式</td>
        <td>定义对象间的一种一对多的依赖关系，以便当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动刷新。</td>
        <td>★★★☆☆</td>
        <td>★★★★★</td>
    </tr>
    <tr>
        <td>状态模式</td>
        <td>允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它所属的类。</td>
        <td>★★★☆☆</td>
        <td>★★★☆☆</td>
    </tr>
    <tr>
        <td>策略模式</td>
        <td>定义一系列的算法，把它们一个个封装起来，并且使他们可相互替换。本模式使得算法的变化可以独立于使用它的客户。</td>
        <td>★☆☆☆☆</td>
        <td>★★★★☆</td>
    </tr>
    <tr>
        <td>模板方法模式</td>
        <td>定义一个操作中的算法的骨架，而将一些步骤延迟到子类。</td>
        <td>★★☆☆☆</td>
        <td>★★★☆☆</td>
    </tr>
    <tr>
        <td>访问者模式</td>
        <td>表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素类别的前提下定义作用于这些元素的新操作。</td>
        <td>★★★★☆</td>
        <td>★☆☆☆☆</td>
    </tr>
</table>


### 单例模式
> 单例模式：确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。单例模式是一种对象创建型模式。

单例模式设计就是采用一定的方法保证在整个程序中,对某个类只能存在一个对象的实例,并且该类只提供一个取得其对象实例的方法.

>单例模式作用:<br>
> - 在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如网站首页页面缓存）.
> - 避免对资源的多重占用（比如写文件操作）.

单例模式使用的场景：需要频繁的进行创建和销毁的对象、创建对象时耗时过多或耗费资源过多(即：重量级对象)，但又经常用到的对象、工具类对象、频繁访问数据库或文件的对象(比如数据源、`session` 工厂等)

单例模式的6种写法.

写法名称 | 优点 | 缺点
---|---|---
[饿汉式](#饿汉式) | 线程安全,写法简单 | 不懒加载,可能造成浪费 
[懒汉式(线程不安全)](#懒汉式(线程不安全)) | 懒加载 | 线程不安全
[懒汉式(线程安全)](#懒汉式(线程安全)) | 线程安全,懒加载 | 效率很低,反序列化破坏单例
[双重校验锁](#双重校验锁) | 线程安全,懒加载 | 反序列化破坏单例
[静态内部类式](#静态内部类式) | 线程安全,懒加载 | 反序列化破坏单例 
[枚举式](#枚举式) | 防止反射攻击,反序列化创建对象,写法简单 | 不能传参,继承其他类



#### 饿汉式
```java
class Singleton {

    private Singleton() {}

    private static final Singleton instance = new Singleton();

    public static Singleton getInstance() {
        return instance;
    }
}
```
这种写法比较简单，就是在类加载的时候就完成实例化。避免了线程同步问题。但是在类装载的时候就完成实例化，没有达到懒加载的效果。如果从始至终从未使用过这个实例，则会造成内存的浪费.

#### 线程不安全的懒汉式
```java
class Singleton {
    private Singleton() {
    }

    private static Singleton instance;

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
起到了懒加载的效果，但是只能在单线程下使用。如果在多线程下，一个线程进入了`if (singleton == null)`判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。所以在多线程环境下不可使用这种方式.

#### 线程安全的懒汉式
```java
class Singleton {

    private static Singleton instance;

    private Singleton() {
    }

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```
虽然解决了线程安全问题但是效率太低了，每个线程在想获得类的实例时候，执行`getInstance()`方法都要进行同步。而其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接 `return`就行了。

#### 双重校验锁
```java
class Singleton {

    /**
     * volatile在这作用: 禁止JVM指令重排
     */
    private static volatile Singleton instance;

    private Singleton() {
    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```
`Double-Check`概念是多线程开发中常使用到的，如代码中所示，我们进行了两次`if (singleton == null)`检查，这样就可以保证线程安全了。这样，实例化代码只用执行一次，后面再次访问时，判断`if (singleton == null)`，直接`return`实例化对象，也避免的反复进行方法同步.

#### 静态内部类式
```java
class Singleton {

    private Singleton() {}

    private static class InnerClass {
        private static final Singleton instance = new Singleton();
    }
    public static Singleton getInstance() {
        return InnerClass.instance;
    }
}
```
>这种方式同样利用了`classloder`的机制来保证初始化`instance`时只有一个线程，它跟饿汉式不同的是（很细微的差别）：饿汉式是只要`Singleton`类被装载了，那么`instance`就会被实例化（没有达到`lazy loading`效果），而这种方式是`Singleton`类被装载了，`instance`不一定被初始化。因为`SingletonHolder`类没有被主动使用，只有显示通过调用`getInstance`方法时，才会显示装载`SingletonHolder`类，从而实例化`instance`。想象一下，如果实例化`instance`很消耗资源，我想让他延迟加载，另外一方面，我不希望在`Singleton`类加载时就实例化，因为我不能确保`Singleton`类还可能在其他的地方被主动使用从而被加载，那么这个时候实例化`instance`显然是不合适的。这个时候，这种方式相比饿汉式更加合理。

#### 枚举式
```java
enum Singleton {
    INSTAMCE;

    Singleton() {
    }
}
```
这种方式是《Effective Java》作者`Josh Bloch`提倡的方式.借助 JDK1.5 中添加的枚举来实现单例模式。不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象。

#### 单例与序列化
上述单例模式6种写法除了,枚举式单例外其他5种写法都存在序列化问题.**序列化可以破坏单例.原因是序列化会通过反射调用无参数的构造方法创建一个新的对象.**

要想防止序列化对单例的破坏，只要在单例类中定义`readResolve`方法就可以解决该问题.**原因是反序列化时,会通过反射的方式调用要被反序列化的类的`readResolve`方法**
主要在`Singleton`类中定义`readResolve`方法，并在该方法中指定要返回的对象的生成策略，就可以防止单例被破坏。

以`DCL`为例,在该单例类中插入`readResolve`方法。
```java
public class Singleton implements Serializable{

    private volatile static Singleton singleton;
    
    private Singleton (){}
    
    public static Singleton getSingleton() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                if (singleton == null) {
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }

    private Object readResolve() {
        return singleton;
    }
}
```

### 工厂模式
工厂模式是将实例化的对象代码提取出来,放到一个类中统一管理和维护,达到和主项目的依赖关系的解耦,从而提高项目的扩展和维护性.创建对象实例时,不要直接`new`类而是把这个`new`类的动作放在一个工厂的方法中,并返回.不要让类继承具体的类,而是继承抽象类或者实现接口.

详情查看以下三种工厂设计模式.

#### 简单工厂模式
> 简单工厂模式：定义一个工厂类，它可以根据参数的不同返回不同类的实例，被创建的实例通常都具有共同的父类。因为在简单工厂模式中用于创建实例的方法是静态方法，因此简单工厂模式又被称为静态工厂方法模式，它属于类创建型模式。

```java
public class SimpleFactoryDemo {
    public static void main(String[] args) {
        SimpleFactory.getTest(1);
    }
}

class SimpleFactoryImpl1 implements SimpleFactoryInterface {

    @Override
    public void test() {
        System.out.println("i am  simpleFactory 1 ...");
    }
}
class SimpleFactoryImpl2 implements SimpleFactoryInterface {

    @Override
    public void test() {
        System.out.println("i am  simpleFactory 2 ...");
    }
}

class SimpleFactory {
    public static void getTest(int n) {
        switch (n) {
            case 1:
                SimpleFactoryImpl1 simpleFactory = new SimpleFactoryImpl1();
                simpleFactory.test();
                break;
            case 2:
                SimpleFactoryImpl2 simpleFactoryImpl2 = new SimpleFactoryImpl2();
                simpleFactoryImpl2.test();
                break;
            default:
        }
    }
}
```
简单工厂模式总结:
- **优点** 实现了对象创建和使用的分离,代码解耦.符合面向接口(指对外暴露的接口或类)编程思想
- **缺点** 如果代码逻辑,职责过多,则简单工厂会变的十分臃肿.
系统代码扩展困难.一旦添加新产品就不得不修改工厂逻辑，在产品类型较多时,有可能造成工厂逻辑过于复杂,不利于系统的扩展和维护.

简单工厂模式适用于创建的对象比较少,业务逻辑不太复杂的情景

#### 工厂方法模式
> 工厂方法模式：定义一个用于创建对象的接口，让子类决定将哪一个类实例化。工厂方法模式让一个类的实例化延迟到其子类。工厂方法模式又简称为工厂模式，又可称作虚拟构造器模式或多态工厂模式。工厂方法模式是一种类创建型模式。

```java
public class FactoryMethodDemo {
    public static void main(String[] args) {
        FoodFactory f = new ColdRiceNoodleFactory();
        f.getFood().eat();
        // 扩展需要增加产品及相应产品工厂并实现相关接口
    }
}

interface Food {
    void eat();
}
interface FoodFactory {
    Food getFood();
}

class RiceNoodle implements Food{

    @Override
    public void eat() {
        System.out.println("eat rice noodle ...");
    }
}
class RiceNoodleFactory implements FoodFactory{

    @Override
    public Food getFood() {
        return new RiceNoodle();
    }
}

class ColdRiceNoodle implements Food {

    @Override
    public void eat() {
        System.out.println("eat cold rice noodle ...");
    }
}
class ColdRiceNoodleFactory implements FoodFactory {

    @Override
    public Food getFood() {
        return new ColdRiceNoodle();
    }
}
```
工厂方法模式是简单工厂模式的延伸,它**继承了简单工厂模式的优点,同时还弥补了简单工厂模式的不足.**
使用工厂方法模式扩展时,无须修改抽象工厂和抽象产品提供的接口,无须修改客户端,也无须修改其他的具体工厂和具体产品,而只**要添加一个具体工厂和具体产品**就可以了，这样，系统的可扩展性也就变得非常好，完全符合“开闭原则”。

但是在添加新产品时，需要编写新的具体产品类，而且还要提供与之对应的具体工厂类，**系统中类的个数将成对增加**，在一定程度上增加了系统的复杂度，有更多的类需要编译和运行，会给系统带来一些额外的开销。

#### 抽象工厂模式
> 抽象工厂模式：提供一个创建一系列相关或相互依赖对象的接口，而无须指定它们具体的类。抽象工厂模式又称为Kit模式，它是一种对象创建型模式。

```java
interface Food {
    void eat();
}

interface Factory {
    ColdRiceNoodle getCOldRiceNoodle();
    RiceNoodle getRiceNoodle();
}
class RiceNoodle implements Food{

    @Override
    public void eat() {
        System.out.println("eating rice noodle");
    }
}
class ColdRiceNoodle implements Food{

    @Override
    public void eat() {
        System.out.println("eating cold rice noodle");
    }
}
class RiceNoodleFactory implements Factory {


    @Override
    public ColdRiceNoodle getCOldRiceNoodle() {
        return new ColdRiceNoodle();
    }

    @Override
    public RiceNoodle getRiceNoodle() {
        return new RiceNoodle();
    }
}

class ColdRiceNoodleFactory implements Factory {

    @Override
    public ColdRiceNoodle getCOldRiceNoodle() {
        return new ColdRiceNoodle();
    }

    @Override
    public RiceNoodle getRiceNoodle() {
        return new RiceNoodle();
    }
}
```
抽象工厂模式是工厂方法模式的进一步延伸,仍然具有工厂方法和简单工厂的**优点**.抽象工厂模式隔离了具体类的生成,使得客户并不需要知道什么被创建。由于这种隔离，更换一个具体工厂就变得相对容易，所有的具体工厂都实现了抽象工厂中定义的那些公共接口，因此只需改变具体工厂的实例，就可以在某种程度上改变整个软件系统的行为.

但是抽象工厂也存在一些**缺点**,增加新的产品等级结构麻烦，需要对原有系统进行较大的修改，甚至需要修改抽象层代码，这显然会带来较大的不便，违背了“开闭原则”。

### 原型模式
在java中通过`new`关键字创建的对象是非常繁琐的,在我们需要大量对象的情况下,原型模式就是我们可以考虑实现的方式.

> 原型模式：使用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。原型模式是一种对象创建型模式

原型模式我们也称为克隆模式，即一个某个对象为原型克隆出来一个一模一样的对象，该对象的属性和原型对象一模一样。而且对于原型对象没有任何影响。**原型模式的克隆方式有两种：浅克隆和深度克隆;浅克隆和深克隆的主要区别在于是否支持引用类型的成员变量的复制.**

#### 浅克隆
在浅克隆中,当对象被复制时只复制它本身和其中包含的值类型的成员变量,而引用类型的成员对象并没有复制.

代码实现
```java
public class ShallowClone {
    public static void main(String[] args) {
        CloneHuman cloneHuman = new CloneHuman("黑色","大眼睛","高鼻梁","大嘴巴",new Date(123231231231L));
        for (int i = 0; i < 20; i++) {
            try {
                CloneHuman clone = (CloneHuman)cloneHuman.clone();
                System.out.printf("头发：%s,眼睛：%s,鼻子：%s,嘴巴：%s,生日：%s",clone.getHair(),clone.getEye(),clone.getNodes(),clone.getMouse(),clone.getBirth());
                System.out.println();
                System.out.println("浅克隆，引用类型地址比较：" + (cloneHuman.getBirth() == clone.getBirth()));
            } catch (CloneNotSupportedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}

class CloneHuman  implements Cloneable {

    private String hair;

    private String eye;

    private String nodes;

    private String mouse;

    private Date birth;

    public String getHair() {
        return hair;
    }

    public void setHair(String hair) {
        this.hair = hair;
    }

    public String getEye() {
        return eye;
    }

    public void setEye(String eye) {
        this.eye = eye;
    }

    public String getNodes() {
        return nodes;
    }

    public void setNodes(String nodes) {
        this.nodes = nodes;
    }

    public String getMouse() {
        return mouse;
    }

    public void setMouse(String mouse) {
        this.mouse = mouse;
    }

    public CloneHuman(String hair, String eye, String nodes, String mouse,Date brith) {
        this.hair = hair;
        this.eye = eye;
        this.nodes = nodes;
        this.mouse = mouse;
        this.birth = brith;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }
}
```
> Java语言提供的`Cloneable`接口和`Serializable`接口的代码非常简单，它们都是空接口，这种空接口也称为标识接口，标识接口中没有任何方法的定义，其作用是告诉JRE这些接口的实现类是否具有某个功能，如是否支持克隆、是否支持序列化等。

应该注意的是，`clone()`方法并不是`Cloneable`接口的方法，而是`Object`的一个`protected`方法。`Cloneable`接口只是规定，如果一个类没有实现`Cloneable`接口又调用了`clone()`方法，就会抛出 `CloneNotSupportedException`。

#### 深克隆
在深克隆中,除了对象本身被复制外,对象所包含的所有成员变量也将复制.
深克隆有两种实现方式,第一种是在浅克隆的基础上实现,第二种是通过序列化和反序列化实现

**在浅克隆的基础上实现**
```java
public class DeepClone {
    public static void main(String[] args) {
        CloneHuman cloneHuman = new CloneHuman("黑色","大眼睛","高鼻梁","大嘴巴",new Date(123231231231L));
        for (int i = 0; i < 20; i++) {
            try {
                CloneHuman clone = (CloneHuman)cloneHuman.clone();
                System.out.printf("头发：%s,眼睛：%s,鼻子：%s,嘴巴：%s,生日：%s",clone.getHair(),clone.getEye(),clone.getNodes(),clone.getMouse(),clone.getBirth());
                System.out.println();
                System.out.println("深克隆，引用类型地址比较：" + (cloneHuman.getBirth() == clone.getBirth()));
            } catch (CloneNotSupportedException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
class CloneHuman  implements Cloneable {

    private String hair;

    private String eye;

    private String nodes;

    private String mouse;

    private Date birth;

    public String getHair() {
        return hair;
    }

    public void setHair(String hair) {
        this.hair = hair;
    }

    public String getEye() {
        return eye;
    }

    public void setEye(String eye) {
        this.eye = eye;
    }

    public String getNodes() {
        return nodes;
    }

    public void setNodes(String nodes) {
        this.nodes = nodes;
    }

    public String getMouse() {
        return mouse;
    }

    public void setMouse(String mouse) {
        this.mouse = mouse;
    }

    public CloneHuman(String hair, String eye, String nodes, String mouse,Date brith) {
        this.hair = hair;
        this.eye = eye;
        this.nodes = nodes;
        this.mouse = mouse;
        this.birth = brith;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        CloneHuman human = (CloneHuman)super.clone();
        human.birth = (Date)this.birth.clone();
        return human;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }
}
```
**序列化反序列化实现深克隆**
```java
public class DeepClone2 {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        CloneHuman2 cloneHuman1 = new CloneHuman2("黑色","大眼睛","高鼻梁","大嘴巴",new Date(123231231231L));

        // 使用序列化和反序列化实现深克隆
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(bos);
        oos.writeObject(cloneHuman1);
        byte[] bytes = bos.toByteArray();

        ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
        ObjectInputStream ois = new ObjectInputStream(bis);

        // 克隆好的对象
        CloneHuman2 cloneHuman2 = (CloneHuman2) ois.readObject();
        System.out.println("深克隆，引用类型地址比较：" + (cloneHuman1.getBirth() == cloneHuman2.getBirth()));

    }
}
class CloneHuman2  implements Cloneable, Serializable {

    private String hair;

    private String eye;

    private String nodes;

    private String mouse;

    private Date birth;

    public String getHair() {
        return hair;
    }

    public void setHair(String hair) {
        this.hair = hair;
    }

    public String getEye() {
        return eye;
    }

    public void setEye(String eye) {
        this.eye = eye;
    }

    public String getNodes() {
        return nodes;
    }

    public void setNodes(String nodes) {
        this.nodes = nodes;
    }

    public String getMouse() {
        return mouse;
    }

    public void setMouse(String mouse) {
        this.mouse = mouse;
    }

    public CloneHuman2(String hair, String eye, String nodes, String mouse,Date brith) {
        this.hair = hair;
        this.eye = eye;
        this.nodes = nodes;
        this.mouse = mouse;
        this.birth = brith;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        CloneHuman2 human = (CloneHuman2)super.clone();
        human.birth = (Date)this.birth.clone();
        return human;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }
}
```

#### 总结
原型模式作为一种快速创建大量相同或相似对象的方式，在软件开发中应用较为广泛，很多软件提供的复制和粘贴操作就是原型模式的典型应用.

通过`clone`的方式在获取大量对象的时候性能开销基本没有什么影响，而`new`的方式随着实例的对象越来越多，性能会急剧下降，所以原型模式是一种比较重要的获取实例的方式.

**优点**
- 当创建新的对象实例较为复杂时，使用原型模式可以简化对象的创建过程，提高创建对象的效率。
- 可以使用深克隆的方式保存对象的状态，使用原型模式将对象复制一份并将其状态保存起来，可辅助实现撤销操作。
- 扩展性较好，由于在原型模式中提供了抽象原型类，在客户端可以针对抽象原型类进行编程，而将具体原型类写在配置文件中，增加或减少产品类对原有系统都没有任何影响。

**缺点**
- 需要为每一个类配备一个克隆方法，而且该克隆方法位于一个类的内部，当对已有的类进行改造时，需要修改源代码，违背了“开闭原则”。
- 在实现深克隆时需要编写较为复杂的代码，而且当对象之间存在多重的嵌套引用时，为了实现深克隆，每一层对象对应的类都必须支持深克隆，实现起来可能会比较麻烦。

**使用场景**

原型模式很少单独出现，一般是和工厂方法模式一起出现，通过`clone`的方法创建一个对象，然后由工厂方法提供给调用者。
spring中bean的创建实际就是两种：单例模式和原型模式。

- 创建新对象成本较大，新的对象可以通过原型模式对已有对象进行复制来获得。
- 系统要保存对象的状态，而对象的状态变化很小，或者对象本身占用内存较少时，可以使用原型模式配合备忘录模式来实现。

### 建造者模式
> 建造者模式：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。建造者模式是一种对象创建型模式。

建造者模式是较为复杂的创建型模式，它将客户端与包含多个组成部分（或部件）的复杂对象的创建过程分离，客户端无须知道复杂对象的内部组成部分与装配方式，只需要知道所需建造者的类型即可。它关注如何一步一步创建一个的复杂对象，不同的具体建造者定义了不同的创建过程，且具体建造者相互独立，增加新的建造者非常方便，无须修改已有代码，系统具有较好的扩展性。

代码实现
```java
public class MainTest {
    public static void main(String[] args) {

        Director director = new Director();
        Builder commonBuilder = new CommonRole();

        director.construct(commonBuilder);
        Role commonRole = commonBuilder.getRole();
        System.out.println(commonRole);
    }
}

class Role {
    private String head;
    private String body;
    private String foot;
    private String sp;
    private String hp;
    private String name;

    public void setSp(String sp) {
        this.sp = sp;
    }

    public String getSp() {
        return sp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }

    public String getHp() {
        return hp;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Role{" +
                "head='" + head + '\'' +
                ", body='" + body + '\'' +
                ", foot='" + foot + '\'' +
                ", sp='" + sp + '\'' +
                ", hp='" + hp + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}

abstract class Builder {

    public abstract void builderHead();

    public abstract void builderBody();

    public abstract void builderFoot();

    public abstract void builderSp();

    public abstract void builderHp();

    public abstract void builderName();

    public Role getRole() {
        return new Role();
    }
}

class CommonRole extends Builder {

    private Role role = new Role();

    @Override
    public void builderHead() {
        System.out.println("building head .....");
    }

    @Override
    public void builderBody() {
        System.out.println("building body .....");
    }

    @Override
    public void builderFoot() {
        System.out.println("building foot .....");
    }

    @Override
    public void builderSp() {
        role.setSp("100");
    }

    @Override
    public void builderHp() {
        role.setHp("100");
    }

    @Override
    public void builderName() {
        role.setName("lucy");
    }

    @Override
    public Role getRole() {
        return role;
    }
}
class Director {

    public void construct(Builder builder) {
        builder.builderHead();
        builder.builderBody();
        builder.builderFoot();
        builder.builderHp();
        builder.builderSp();
        builder.builderName();
    }
}
```

**优点**
- 客户端不必知道产品内部组成的细节，将产品本身与产品的创建过程解耦，使得相同的创建过程可以创建不同的产品对象。
- 建造者模式很容易进行扩展。如果有新的需求，通过实现一个新的建造者类就可以完成，基本上不用修改之前已经测试通过的代码，因此也就不会对原有功能引入风险。符合开闭原则。

**缺点**
- 若产品内部发生变化，建造者都要修改，成本较大；若内部变化复杂，会有很多的建造类。
- 产品必须有共同点，使用范围有限。建造者模式创造出来的产品，其组成部分基本相同。如果产品之间的差异较大，则不适用这个模式。

**使用场景**
- 需要生成的产品对象有复杂的内部结构，这些产品对象通常包含多个成员属性。
- 需要生成的产品对象的属性相互依赖，需要指定其生成顺序。
- 对象的创建过程独立于创建该对象的类。在建造者模式中引入了指挥者类，将创建过程封装在指挥者类中，而不在建造者类中。
- 隔离复杂对象的创建和使用，并使得相同的创建过程可以创建不同的产品。

### 适配器模式
> 适配器模式：将一个接口转换成客户希望的另一个**接口**(指广义的接口，它可以表示一个方法或者方法的集合)，使接口不兼容的那些类可以一起工作，其别名为包装器。适配器模式既可以作为类结构型模式，也可以作为对象结构型模式。

代码实现
```java

```

### 外观模式
> 外观模式：为子系统中的一组接口提供一个统一的入口。外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。

外观模式又称为门面模式，它是一种对象结构型模式。外观模式是[迪米特法则](#迪米特法则)的一种具体实现，通过引入一个新的外观角色可以降低原有系统的复杂度，同时降低客户类与子系统的耦合度。<br>
外观模式的主要目的在于降低系统的复杂程度，在面向对象软件系统中，类与类之间的关系越多，不能表示系统设计得越好，反而表示系统中类之间的耦合度太大，这样的系统在维护和修改时都缺乏灵活性，因为一个类的改动会导致多个类发生变化，而外观模式的引入在很大程度上降低了类与类之间的耦合关系。引入外观模式之后，增加新的子系统或者移除子系统都非常方便，客户类无须进行修改（或者极少的修改），只需要在外观类中增加或移除对子系统的引用即可。从这一点来说，外观模式在一定程度上并不符合开闭原则，增加新的子系统需要对原有系统进行一定的修改，虽然这个修改工作量不大。

```java
public class MainTest {
    public static void main(String[] args) {
        Facade facade = new Facade();
        facade.aTest();
    }
}
class Facade {
    private final A a;
    private final B b;
    private final C c;
    private final D d;

    public Facade() {
        this.a = A.getInstance();
        this.b = B.getInstance();
        this.c = C.getInstance();
        this.d = D.getInstance();
    }

    public void aTest() {
        a.aTest();
        b.aTest();
        c.aTest();
        d.aTest();
    }
}

/**
 * A调用B类，A调用C类，B调用C类，D调用B类，D调用C类
 */
class A {
   private final static A instance = new A();
   private A(){}
   public static A getInstance() {
       return instance;
   }
   public  void aTest() {
       B.getInstance().aTest();
       C.getInstance().aTest();
       System.out.println("A class test method ...");
   }
}

class B {
    private final static B instance = new B();
    private B(){}
    public static B getInstance() {
        return instance;
    }
    public  void aTest() {
        C.getInstance().aTest();
        System.out.println("B class test method ...");
    }
}

class C {
    private final static C instance = new C();
    private C(){}
    public  static C getInstance() {
        return instance;
    }
    public  void aTest() {
        System.out.println("C class test method ...");
    }
}

class D {
    private final static D instance = new D();
    private D(){}
    public static D getInstance() {
        return instance;
    }
    public  void aTest() {
        B.getInstance().aTest();
        C.getInstance().aTest();
        System.out.println("D class test method ...");
    }
}
```
**优点**
- 减少关联关系；对客户端屏蔽了具体的实现，使得子系统使用起来更加容易；客户端代码将变得很简单，与之关联的对象也很少。
- 解耦合；具体实现有改变不会影响到调用的客户端，只需要调整外观类即可。

**缺点**
- 如果设计不当，扩展时增加新的实现可能需要修改外观类的源代码，违背了开闭原则。
- 不能很好地限制客户端直接使用子系统类，如果对客户端访问子系统类做太多的限制则减少了可变性和灵活性。

**使用场景**
- 当要为访问一系列复杂的子系统提供一个简单入口时可以使用外观模式。
- 客户端程序与多个子系统之间存在很大的依赖性。引入外观类可以将子系统与客户端解耦，从而提高子系统的独立性和可移植性。
- 在层次化结构中，可以使用外观模式定义系统中每一层的入口，层与层之间不直接产生联系，而通过外观类建立联系，降低层之间的耦合度。

### 代理模式
> 代理模式：给某一个对象提供一个代理或占位符，并由代理对象来控制对原对象的访问。

代理模式是为一个对象提供一个替身，以控制对这个对象的访问。即通过代理对象访问目标对象.这样做的好处是:可以在目标对象实现的基础上,增强额外的功能操作,即扩展目标对象的功能。
被代理的对象可以是远程对象、创建开销大的对象或需要安全控制的对象

代理模式有不同的形式, 主要有三种 静态代理、动态代理 (`JDK`代理、`Cglib`代理)

#### 静态代理
```java
public class MainTest {
    public static void main(String[] args) {
        ProxyImpl proxy = new ProxyImpl();
        StaticProxy staticProxy = new StaticProxy(proxy);
        staticProxy.test();
    }
}

interface ProxyInterface {
    void test();
}

class ProxyImpl implements ProxyInterface{

    @Override
    public void test() {
        System.out.println("helloWorld");
    }

}


class StaticProxy implements ProxyInterface{

    private ProxyImpl target;

    public StaticProxy (ProxyImpl target){
        this.target=target;
    }


    @Override
    public void test() {
        System.out.println("静态代理之前...");
        target.test();
        System.out.println("静态代理之后...");
    }
}
```
静态代理能在不修改目标对象的功能前提下，**能通过代理对象对目标进行扩展。**但是因为代理对象需要与目标对象实现相同的接口，所以会有很多代理类**一旦接口增加方法后，目标对象与代理对象都需要维护**。

#### 动态代理
动态代理，代理对象不需要实现接口，但是目标对象需要实现接口，否则不能实现动态代理。代理对象的生产是利用JDK的API，动态的在内存中构建代理对象。

##### JDK动态代理
```java
public class MainTest {
    public static void main(String[] args) {
        ProxyImpl proxy = new ProxyImpl();
        ProxyInterface jdkProxyInterface = (ProxyInterface)new JDKProxy().bind(proxy);
        jdkProxyInterface.test();
    }
}
interface ProxyInterface {
    void test();
}

class ProxyImpl implements ProxyInterface{

    @Override
    public void test() {
        System.out.println("helloWorld");
    }

}

class JDKProxy {
    //通用类型，表示被代理的真实对象
    private Object target;

    public Object bind(Object target){
        this.target=target;
        //生成代理类（与被代理对象实现相同接口的兄弟类）
        return Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), (proxy, method, args) -> {
            Object res;
            System.out.println("JDK动态代理前");
            res=method.invoke(target, args);
            System.out.println("JDK动态代理后");
            return res;
        });
    }

}
```

##### CGlib动态代理
`Cglib`代理也叫作子类代理,它是在内存中构建一个子类对象从而实现对目标对象功能扩展。
`Cglib`是一个强大的高性能的代码生成包,它可以在运行期扩展 java 类与实现 java 接口.它广泛的被许多 AOP 的框架使用,例如 Spring AOP，实现方法拦截。

```java
public class MainTest {
    public static void main(String[] args) {
        Target target = new Target();
        Target bind = (Target)new CGLibProxy().bind(target);
        bind.test();
    }
}


class Target{

    public void test() {
        System.out.println("helloWorld");
    }

}

class CGLibProxy implements MethodInterceptor {

    private Object target;

    public  Object bind(Object target) {
        this.target = target;
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(target.getClass());
        enhancer.setCallback(this);
        return enhancer.create();
    }

    @Override
    public Object intercept(Object proxy, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        Object res;
        System.out.println("CGLib动态代理前");
        res=method.invoke(target, args);
        System.out.println("CGLib动态代理后");
        return res;
    }

}
```

> PS：使用`CGLib`实现动态代理时出现了下面这个异常<br>
`Exception in thread "main" java.lang.IncompatibleClassChangeError: class net.sf.cglib.core.DebuggingClassWriter has interface org.objectweb.asm.ClassVisitor as super class`<br>
> 发现是因为两个相关的jar包,cglib和asm的版本冲突了。测试时用`cglib2.2.jar`和`asm3.3.1.jar`版本，解决jar包冲突问题。

### 迭代器模式
> 迭代器模式：提供一种方法来访问聚合对象，而不用暴露这个对象的内部表示，其别名为游标。迭代器模式是一种对象行为型模式。

迭代器模式的重要用途就是帮助我们遍历容器。迭代器模式，提供一种遍历集合元素的统一接口，用一致的方法遍历集合元素，不需要知道集合对象的底层表示，即：不暴露其内部的结构。在迭代器模式结构中包含聚合和迭代器两个层次结构，考虑到系统的灵活性和可扩展性，在迭代器模式中应用了[工厂方法模式](#工厂方法模式).

代码实现
```java
public class MainTest {
    public static void main(String[] args) {
        Bread bread = new Bread();
        bread.add("面粉");
        bread.add("黄油");
        bread.add("白糖");
        bread.add("鸡蛋");
        Iterator iterator = bread.getIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}

class FoodIterator implements Iterator {

    String[] foods;
    int      position = 0;

    public FoodIterator(String[] foods) {
        this.foods = foods;
    }

    @Override
    public boolean hasNext() {
        return position != foods.length;
    }

    @Override
    public Object next() {
        String food = foods[position];
        position += 1;
        return food;
    }

}

interface Food {

    void add(String name);

    Iterator getIterator();
}

class Bread implements Food{
    private String[] foods    = new String[4];
    private int      position = 0;

    @Override
    public void add(String name) {
        foods[position] = name;
        position += 1;
    }

    @Override
    public Iterator getIterator() {
        return new FoodIterator(this.foods);
    }
}
```
> 迭代器模式是一种使用频率非常高的设计模式，通过引入迭代器可以将数据的遍历功能从聚合对象中分离出来，聚合对象只负责存储数据，而遍历数据由迭代器来完成。由于很多编程语言的类库都已经实现了迭代器模式，因此在实际开发中，我们只需要直接使用Java、C#等语言已定义好的迭代器即可，迭代器已经成为我们操作聚合对象的基本工具之一。

迭代器的使用现在非常广泛，因为Java中提供了`java.util.Iterator`。而且Java中的很多容器（`Collection、Set`）也都提供了对迭代器的支持。

**优点**
- 提供一个统一的方法遍历对象，客户不用再考虑聚合的类型，使用一种方法就可以遍历对象了。
- 隐藏了聚合的内部结构，客户端要遍历聚合的时候只能取到迭代器，而不会知道聚合的具体组成。
- 提供了一种设计思想，就是一个类应该只有一个引起变化的原因（[单一职责原则](#单一职责原则)）。在聚合类中，我们把迭代器分开，就是要把管理对象集合和遍历对象集合的责任分开，这样一来集合改变的话，只影响到聚合对象。而如果遍历方式改变的话，只影响到了迭代器。
- 当要展示一组相似对象，或者遍历一组相同对象时使用, 适合使用迭代器模式

**缺点**
- 由于迭代器模式将存储数据和遍历数据的职责分离，增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。

**使用场景**
- 需要为一个聚合对象提供多种遍历方式。
- 使用迭代器模式可以为遍历不同的聚合结构提供一个统一的接口，接口的实现类中为不同的聚合结构提供不同的遍历方式，而客户端可以一致性地操作该接口。




# Java关键字

在JAVA中目前一共有53个关键字：其中由51+2个保留字=53个关键字.

> Java关键字是对Java编译器有特殊含义的字符串，是编译器和程序员的一个约定，程序员利用关键字来告诉编译器其声明的变量类型、类、方法特性等信息。

## 概览

| 类别                 | 关键字       | 说明                                                         |
| -------------------- | ------------ | ------------------------------------------------------------ |
| 访问控制             | private      | 私有的 当前类可用                                            |
| –                    | protected    | 受保护的 当前包内可用                                        |
| –                    | public       | 公共的 可跨包                                                |
| 类、方法和变量修饰符 | abstract     | 声明抽象                                                     |
| –                    | class        | 类; 类名需要与文件名相同                                     |
| –                    | extends      | 扩充/继承; 用于类继承类                                      |
| –                    | final        | 最终值，不可改变的                                           |
| –                    | implements   | 实现（接口）                                                 |
| –                    | interface    | 接口                                                         |
| –                    | native       | 本地，原生方法（非Java实现）                                 |
| –                    | new          | 创建新对象                                                   |
| –                    | static       | 静态                                                         |
| –                    | strictfp     | 严格，精准                                                   |
| –                    | synchronized | 线程，同步                                                   |
| –                    | transient    | 短暂, 瞬态;与Java序列化相关                                  |
| –                    | volatile     | 不稳定的,线程                                                |
| 数据类型             | boolean      | 布尔型; true、false                                          |
| –                    | byte         | 字节型;8bit                                                  |
| –                    | char         | 字符型;16bit                                                 |
| –                    | double       | 双精度浮点; 64bit                                            |
| –                    | float        | 单精度浮点;32bit                                             |
| –                    | int          | 整型;32bit                                                   |
| –                    | long         | 长整型;64bit                                                 |
| –                    | short        | 短整型;16bit                                                 |
| –                    | null         | 空值                                                         |
| –                    | true         | 真                                                           |
| –                    | false        | 假                                                           |
| 程序控制语句         | break        | 跳出循环; 执行循环体后的代码                                 |
| –                    | case         | 定义一个值以供switch选择                                     |
| –                    | continue     | 继续; 中断本次循环，并开始下一轮循环                         |
| –                    | default      | 默认; default就是如果没有匹配的case就执行它， default并不是必须的 |
| –                    | do           | 运行; 通长与while连用                                        |
| –                    | else         | 否则;与if连用                                                |
| –                    | for          | 循环                                                         |
| –                    | if           | 如果;通常与else连用                                          |
| –                    | instanceof   | 实例; 一个二元操作符，和==、>、<是同一类的                   |
| –                    | return       | 返回                                                         |
| –                    | switch       | 根据值选择执行                                               |
| –                    | while        | 循环                                                         |
| 变量引用             | super        | 父类，超类                                                   |
| –                    | this         | 本类                                                         |
| –                    | void         | 无返回值                                                     |
| 包相关               | import       | 引入包的关键字                                               |
| –                    | package      | 定义包的关键字                                               |
| 错误处理             | assert       | 断言表达式是否为真                                           |
| –                    | catch        | 捕捉异常                                                     |
| –                    | finally      | 有没有异常都执行                                             |
| –                    | throw        | 抛出一个异常对象                                             |
| –                    | throws       | 声明一个异常可能被抛出                                       |
| –                    | try          | 捕获异常                                                     |
| 保留关键字           | goto         | 是关键字但不能使用                                           |
| –                    | const        | 是关键字但不能使用                                           |
| 其他                 | enum         | 枚举，列举，型别                                             |

<span style="float: right; color: #8492a6; font-size: 13px">----参考 [Java关键字(简表)](https://blog.csdn.net/s984944968/article/details/89066768?utm_medium=distribute.pc_relevant_download.none-task-blog-BlogCommendFromBaidu-1.nonecase&depth_1-utm_source=distribute.pc_relevant_download.none-task-blog-BlogCommendFromBaidu-1.nonecas)
</span>

## final

final是Java中的一个关键字，它所表示的是“这部分是无法修改的”。

使用 final 可以定义 ：变量、方法、类。

### 变量

声明数据为常量，可以是编译时常量，也可以是在运行时被初始化后不能被改变的常量.

```java
class Test{
     final String name = "123";

}
```

在编译期间如果有值的话就已经被赋值

- 对于基本类型，final 使数值不变；
- 对于引用类型，final 使引用不变，也就不能引用其它对象，但是被引用的对象本身是可以修改的。(不改变地址值,改变地址内容)

```java
final int x = 1;
// x = 2;  // cannot assign value to final variable 'x'
final A y = new A();
y.a = 1;
```

### 方法

声明方法不能被子类重写。

```java
class Parent {
    final void name() {
        System.out.println("123");
    }
}
```

private 方法隐式地被指定为 final，**如果在子类中定义的方法和基类中的一个 private 方法签名相同，此时子类的方法不是重写基类方法，而是在子类中定义了一个新的方法。**

### 类

声明类不允许被继承。

```java
final class Parent {

}
```

## static

static表示“静态”的意思，用来修饰成员变量和成员方法，也可以形成静态static代码块

### 静态变量

- 静态变量：又称为类变量，也就是说这个变量属于类的，类所有的实例都共享静态变量，可以直接通过类名来访问它。静态变量在内存中只存在一份。
- 实例变量：每创建一个实例就会产生一个实例变量，它与该实例同生共死。

```java
public class A {

    private int x;         // 实例变量
    private static int y;  // 静态变量

    public static void main(String[] args) {
        // int x = A.x;  // Non-static field 'x' cannot be referenced from a static context
        A a = new A();
        int x = a.x;
        int y = A.y;
    }
}
```

### 静态方法

静态方法在类加载的时候就存在了，它不依赖于任何实例。所以静态方法必须有实现，也就是说它不能是抽象方法。

```java
public abstract class A {
    public static void func1(){
    }
    // public abstract static void func2();  // Illegal combination of modifiers: 'abstract' and 'static'
}
```

**只能访问所属类的静态字段和静态方法，方法中不能有 this 和 super 关键字。**

```java
public class A {

    private static int x;
    private int y;

    public static void func1(){
        int a = x;
        // int b = y;  // Non-static field 'y' cannot be referenced from a static context
        // int b = this.y;     // 'A.this' cannot be referenced from a static context
    }
}
```

### 静态语句块

静态语句块在类初始化时运行一次。

```java
public class A {
    static {
        System.out.println("123");
    }

    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new A();
    }
}
```

### 静态内部类

非静态内部类依赖于外部类的实例，而静态内部类不需要。**静态内部类不能访问外部类的非静态的变量和方法。**

```java
public class OuterClass {

    class InnerClass {
    }

    static class StaticInnerClass {
    }

    public static void main(String[] args) {
        // InnerClass innerClass = new InnerClass(); // 'OuterClass.this' cannot be referenced from a static context
        OuterClass outerClass = new OuterClass();
        InnerClass innerClass = outerClass.new InnerClass();
        StaticInnerClass staticInnerClass = new StaticInnerClass();
    }
}
```

### 静态导入包

在使用静态变量和方法时不用再指明 ``ClassName``，从而简化代码，但可读性大大降低。``import static com.xxx.ClassName.*``

### 初始化顺序

**静态变量和静态语句块优先于实例变量和普通语句块，静态变量和静态语句块的初始化顺序取决于它们在代码中的顺序.**

```java
public static String staticField = "静态变量";
static {
    System.out.println("静态语句块");
}
public String field = "实例变量";
{
    System.out.println("普通语句块");
}
```

**最后才是构造函数的初始化。**

```

public InitialOrderTest() {
    System.out.println("构造函数");
}
```

**存在继承的情况下，初始化顺序为：**

- 父类（静态变量、静态语句块）
- 子类（静态变量、静态语句块）
- 父类（实例变量、普通语句块）
- 父类（构造函数）
- 子类（实例变量、普通语句块）
- 子类（构造函数）

## transient

### 作用

> Java语言的关键字，变量修饰符，如果用transient声明一个实例变量，当对象存储时，它的值不需要维持。这里的对象存储是指，Java的serialization提供的一种持久化对象实例的机制。当一个对象被序列化的时候，transient型变量的值不包括在序列化的表示中，然而非transient型的变量是被包括进去的。使用情况是：当持久化对象时，可能有一个特殊的对象数据成员，我们不想用serialization机制来保存它。为了在一个特定对象的一个域上关闭serialization，可以在这个域前加上关键字transient。

简单点说，就是被transient修饰的成员变量，在序列化的时候其值会被忽略，在被反序列化后， transient 变量的值被设为初始值， 如 int 型的是 0，对象型的是 null.

### transient与序列化

本人在学习中 ... 

## synchronized

### synchronized用法

- 修饰代码块
```java
    //同步代码块
    public void doSth1(){
        synchronized (SynchronizedDemo.class){
            // to do ...
        }
    }
```

- 修饰方法
```java
     //同步实例方法
    public synchronized void doSth(){
        // to do ...
    }
    
    // 同步静态方法
    public synchronized static void fun() {
    // to do ...
    }
    
```
**被```synchronized```修饰的代码块及方法，在同一时间，只能被单个线程访问**

- **修饰实例方法**:<br> 作用于当前对象实例加锁，进入同步代码前要获得当前对象实例的锁
- **修饰静态方法**:<br> 作用于当前类对象加锁，进入同步代码前要获得当前类对象的锁。也就是给当前类加锁，会作用于类的所有对象实例，因为静态成员不属于任何一个实例对象，是类成员（``static``表明这是该类的一个静态资源，不管``new``了多少个对象，只有一份，所以对该类的所有对象都加了锁）。所以如果一个线程A调用一个实例对象的非静态``synchronized``方法，而线程B需要调用这个实例对象所属类的静态``synchronized``方法，是允许的，不会发生互斥现象，因为访问静态``synchronized``方法占用的锁是当前类的锁，而访问非静态``synchronized``方法占用的锁是当前实例对象锁。

### synchronized原理

在《[The Java® Virtual Machine Specification](https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.11.10)》中有关于synchronized实现原理的介绍.
> 方法级的同步是隐式的。同步方法的常量池中会有一个``ACC_SYNCHRONIZED``标志。当某个线程要访问某个方法的时候，会检查是否有``ACC_SYNCHRONIZED``，如果有设置，则需要先获得监视器锁，然后开始执行方法，方法执行之后再释放监视器锁。这时如果其他线程来请求执行方法，会因为无法获得监视器锁而被阻断住。值得注意的是，如果在方法执行过程中，发生了异常，并且方法内部并没有处理该异常，那么在异常被抛到方法外面之前监视器锁会被自动释放。<br><br>
> 同步代码块使用``monitorenter``和``monitorexit``两个指令实现。可以把执行``monitorenter``指令理解为加锁，执行``monitorexit``理解为释放锁。每个对象维护着一个记录着被锁次数的计数器。未被锁定的对象的该计数器为0，当一个线程获得锁（执行``monitorenter``）后，该计数器自增变为1，当同一个线程再次获得该对象的锁的时候，计数器再次自增。当同一个线程释放锁（执行``monitorexit``指令）的时候，计数器再自减。当计数器为0的时候。锁将被释放，其他线程便可以获得锁。

**无论是``ACC_SYNCHRONIZED``还是``monitorenter``、``monitorexit``都是基于Monitor实现的，在Java虚拟机(HotSpot)中，Monitor是基于C++实现的，由`ObjectMonitor`实现。**

### synchronized与原子性

原子性是指一个操作是不可中断的，要全部执行完成，要不就都不执行。

线程是CPU调度的基本单位。CPU有时间片的概念，会根据不同的调度算法进行线程调度。当一个线程获得时间片之后开始执行，在时间片耗尽之后，就会失去CPU使用权。所以在多线程场景下，由于时间片在线程间轮换，就会发生原子性问题。

在Java中，为了保证原子性，提供了两个高级的字节码指令``monitorenter``和``monitorexit``。前面中，介绍过，这两个字节码指令，在Java中对应的关键字就是``synchronized``。

通过下``monitorexit``和``monitorexit``指令，可以保证被``synchronized``修饰的代码在同一时间只能被一个线程访问，在锁未释放之前，无法被其他线程访问到。因此，在Java中可以使用``synchronized``来保证方法和代码块内的操作是原子性的。
> 线程1在执行``monitorenter``指令的时候，会对Monitor进行加锁，加锁后其他线程无法获得锁，除非线程1主动解锁。即使在执行过程中，由于某种原因，比如CPU时间片用完，线程1放弃了CPU，但是，他并没有进行解锁。而由于``synchronized``的锁是可重入的，下一个时间片还是只能被他自己获取到，还是会继续执行代码。直到所有代码执行完。这就保证了原子性。


### synchronized与可见性

可见性是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值。

> Java内存模型规定了所有的变量都存储在主内存中，每条线程还有自己的工作内存，线程的工作内存中保存了该线程中是用到的变量的主内存副本拷贝，线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存。不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量的传递均需要自己的工作内存和主存之间进行数据同步进行。所以，就可能出现线程1改了某个变量的值，但是线程2不可见的情况。

被``synchronized``修饰的代码，在开始执行时会加锁，执行完成后会进行解锁。而为了保证可见性，有一条规则是这样的：对一个变量解锁之前，必须先把此变量同步回主存中。这样解锁后，后续线程就可以访问到被修改后的值。

所以，``synchronized``关键字锁住的对象，其值是具有可见性的.

### synchronized与有序性

有序性即程序执行的顺序按照代码的先后顺序执行。

除了引入了时间片以外，由于处理器优化和指令重排等，CPU还可能对输入代码进行乱序执行，比如``load->add->save`` 有可能被优化成``load->save->add``这就是可能存在有序性问题。

这里需要注意的是，``synchronized``是无法禁止指令重排和处理器优化的。也就是说，``synchronized``无法避免上述提到的问题。

那么，为什么还说``synchronized``也提供了有序性保证呢？

这就要再把有序性的概念扩展一下了。Java程序中天然的有序性可以总结为一句话：如果在本线程内观察，所有操作都是天然有序的。如果在一个线程中观察另一个线程，所有操作都是无序的。

以上这句话也是《深入理解Java虚拟机》中的原句，但是怎么理解呢？周志明并没有详细的解释。这里我简单扩展一下，这其实和``as-if-serial``语义有关。

``as-if-serial``语义的意思指：不管怎么重排序（编译器和处理器为了提高并行度），单线程程序的执行结果都不能被改变。编译器和处理器无论如何优化，都必须遵守``as-if-serial``语义。

这里不对``as-if-serial``语义详细展开了，简单说就是``as-if-serial``语义保证了单线程中，指令重排是有一定的限制的，而只要编译器和处理器都遵守了这个语义，那么就可以认为单线程程序是按照顺序执行的。当然，实际上还是有重排的，只不过我们无须关心这种重排的干扰。

所以呢，由于``synchronized``修饰的代码，同一时间只能被同一线程访问。那么也就是单线程执行的。所以，可以保证其有序性。


### synchronized与volatile比较

- **性能** ``volatile``关键字是线程同步的轻量级实现，所以``volatile``性能肯定比``synchronized``关键字要好.但是``synchronized``关键字在JavaSE1.6之后进行了主要包括为了减少获得锁和释放锁带来的性能消耗而引入的偏向锁和轻量级锁以及其它各种优化之后执行效率有了显著提升，实际开发中使用``synchronized``关键字的场景还是更多一些

- **修饰范围** ``volatile``关键字只能用于变量而``synchronized``关键字可以修饰方法以及代码块.

- 多线程访问``volatile``关键字不会发生阻塞，而``synchronized``关键字可能会发生阻塞

- ``volatile``关键字能保证数据的可见性，但不能保证数据的原子性。``synchronized``关键字两者都能保证。

- ``volatile``关键字主要用于解决变量在多个线程之间的可见性，而 ```synchronized```关键字解决的是多个线程之间访问资源的同步性

### synchronized与ReentrantLock比较

#### 写在前面

Java 提供了两种锁机制来控制多个线程对共享资源的互斥访问，第一个是 JVM 实现的``synchronized``，而另一个是JDK实现``ReentrantLock``.==值得注意的是在使用锁的时候应注意以下几点==
1. **两种锁混用** ``wait``和``notify``或``notifyAll``方法的调用必须被包裹在同步代码块内才能调用，否则就会报错。这里既然用了``Lock``锁就不能再用 ``wait``和``notify``了，它们是两套加锁机制.不能混用
```java
 public void stock() {
    // 修正: 应用lock创建Condition对象然后调用await() 和 singnal()
    // private Lock lock=new ReentrantLock();	
    // private Condition condition =lock.newCondition();
        lock.lock();
        try {
            if (condition) {
                try {
                    wait();
                    notify();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } else {
                // to do
                if (condition) {
                    this.notify();
                }
            }
        } finally {
            lock.unlock();
        }
    }

```
2. **阻塞和唤醒在同一个方法**
在同一个方法中既阻塞又唤醒，导致线程死锁，程序无法终结.一旦调用 ``wait`` 后，当前线程已经挂起了，即使后面的代码用了 ``notify``，也是无效的，必须由另一个线程调用 ``notify`` 才能唤醒它.
```java
// 修正: 在一个类的不同方法中，一个方法用wait()挂起，另一方法中调 notify() 唤醒，并且这两个方法由不同的线程来调用
 public synchronized void run(){
    if (condition){
        try{
            notify();;
            this.wait();
        } catch (InterruptedException e){
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}

```
3.**每个共享可变变量只能被同一把锁保护**<br>
预期``count``的值顺序增加，而实际结果却有重复.<br>
**原因:**``synchronized (this)``用了当前实例对象作为锁，而每个线程执行时都有自己的``this``锁，导致``count``的操作过程实际是由多把锁控制，没个线程一把锁.
```java
public class LockTest implements Runnable{
	//全局共享变量
	public static int count = 0;

	@Override
	public void run() {
		while(!Thread.currentThread().isInterrupted()) {
			//以当前实例为锁，保护 count 的操作
			// 修正:将this替换为LockTest.class
			synchronized (this) {
				count++;
				// to do ...
			}
		}
	}
	
	// 测试
	public static void main(String[] args) {
		Thread t1 = new Thread(new LockTest());
		Thread t2 = new Thread(new LockTest());
		Thread t3 = new Thread(new LockTest());
		Thread t4 = new Thread(new LockTest());
		
		t1.start();
		t2.start();
		t3.start();
		t4.start();
	}

}

```
#### 比较

- **锁的实现**
``synchronized`` 是 JVM 实现的，而 ``ReentrantLock`` 是 JDK 实现的.

- **性能**
新版本(1.6之后) Java``synchronized``进行了很多优化，例如自旋锁等，``synchronized``与``ReentrantLock``大致相同.``synchronized``是内置在JVM中的，所以它在以后的获得性能提升将会更加直接。所以在没有使用到``ReentrantLock``的高级功能，尽可能地使用 synchronized。

- **释放锁**
``synchronized``无法判断是否获取锁的状态，``ReentrantLock``可以判断是否获取到锁；所以``synchronized``会自动释放锁,``ReentrantLock``要手动释放锁.``synchronized``有异常的时候会自动释放锁,而``ReentrantLock``不会自动释放锁,要手动释放锁(这有可能导致程序员忘记释放锁,而导致一些bug).所以最好在``finally``中声明释放锁

- **可中断**
当持有锁的线程长期不释放锁的时候，正在等待的线程可以选择放弃等待，改为处理其他事情.``ReentrantLock``可中断，而``synchronized`` 不行.

- **公平锁**
公平锁是指多个线程在等待同一个锁时，必须按照申请锁的时间顺序来依次获得锁.``synchronized``中的锁是非公平的，``ReentrantLock`` 默认的构造函数是创建的非公平锁，可以通过参数``true``设为公平锁.但公平锁表现的性能不是很好.

- **锁的灵活度**
一个 ``ReentrantLock`` 可以同时绑定多个 ``Condition`` 对象.
``ReenTrantLock``提供了一个``Condition``类，用来实现分组唤醒需要唤醒的线程们，而不是像``synchronized``要么随机唤醒一个线程要么唤醒全部线程.``synchronized``自动释放锁.``lock``手动释放锁.所以很明显``ReenTrantLock``优于``synchronized``

## volatile

### 概述 

《深入理解JVM》中对volatile的描述: 一旦一个共享变量（类的成员变量、类的静态成员变量）被volatile修饰之后，那么就具备了两层语义：
- 保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的。
- 禁止进行指令重排序.(有序性)
volatile只提供了保证访问该变量时，每次都是从内存中读取最新值，并不会使用寄存器缓存该值——每次都会从内存中读取。
而对该变量的修改，volatile并不提供原子性(线程不安全)的保证.
由于及时更新，很可能导致另一线程访问最新变量值，无法跳出循环的情况
多线程下计数器必须使用锁保护.

### JMM

JMM(Java内存模型Java Memory Model,简称JMM)本身是一种抽象的概念 并不真实存在,它描述的是一组规则或规范通过规范定制了程序中各个变量(包括实例字段,静态字段和构成数组对象的元素)的访问方式.
<br>**JMM关于同步规定:**

- 线程解锁前,必须把共享变量的值刷新回主内存
- 线程加锁前,必须读取主内存的最新值到自己的工作内存
- 加锁解锁是同一把锁

由于JVM运行程序的实体是线程,而每个线程创建时JVM都会为其创建一个**工作内存**(有些地方成为栈空间),工作内存是每个线程的私有数据区域,而Java内存模型中规定所有变量都存储在**主内存**,主内存是共享内存区域,所有线程都可访问,但线程对变量的操作(读取赋值等)必须在工作内存中进行,首先要将变量从主内存拷贝到自己的工作空间,然后对变量进行操作,操作完成再将变量写回主内存,不能直接操作主内存中的变量,各个线程中的工作内存储存着主内存中的变量副本拷贝,因此不同的线程无法访问对方的工作内存,此案成间的通讯(传值) 必须通过主内存来完成



但是，对于``volatile``变量，当对``volatile``变量进行写操作的时候，JVM会向处理器发送一条lock前缀的指令，将这个缓存中的变量回写到系统主存中。

但是就算写回到内存，如果其他处理器缓存的值还是旧的，再执行计算操作就会有问题，所以在多处理器下，为了保证各个处理器的缓存是一致的，就会实现缓存一致性协议

**缓存一致性协议:** 每个处理器通过嗅探在总线上传播的数据来检查自己缓存的值是不是过期了，当处理器发现自己缓存行对应的内存地址被修改，就会将当前处理器的缓存行设置成无效状态，当处理器要对这个数据进行修改操作的时候，会强制重新从系统内存里把数据读到处理器缓存里。

所以，如果一个变量被``volatile``所修饰的话，在每次数据变化之后，其值都会被强制刷入主存。而其他处理器的缓存由于遵守了缓存一致性协议，也会把这个变量的值从主存加载到自己的缓存中。这就保证了一个``volatile``在并发编程中，其值在多个缓存中是可见的。

### volatile特性

#### 保证可见性(及时通知各个线程)

 -	**可见性:** 各个线程对主内存中共享变量的操作都是各个线程各自拷贝到自己的工作内存操作后再写回主内存中的.
这就可能存在一个线程AAA修改了共享变量X的值还未写回主内存中时 ,另外一个线程BBB又对内存中的一个共享变量X进行操作,但此时A线程工作内存中的共享比那里X对线程B来说并不不可见.这种工作内存与主内存同步延迟现象就造成了可见性问题.
简单来说就是当一个线程修改了数据,并且写回主物理内存,其他线程都会得到通知获取最新的数据.
- volatile**可见性**测试
	

```java
class A {
	// 注意: 此时变量要加volatile关键字修饰 
    volatile int number = 0;

    public void numberTo100() {
        this.number = 100;
    }
}

public class VolatileDemo {
    // volatile关键字 可见性测试
    public static void main(String[] args) {
        A a = new A();
        // thread1
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName() + "is come in");
            try {
                Thread.sleep(3);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            a.numberTo100();
            System.out.println(Thread.currentThread().getName() + " update number");
        }, "thread1").start();

        while (a.number == 0) {

        }
        System.out.println(Thread.currentThread().getName() + "thread is over");
    }

}
```

#### 不保证原子性(连续性或一致性)

 - **原子性:** 即不可分割,完整性.当某个线程正在做某个业务时,中间不能被打断,加塞,不能被分割.需要整体完整.要么同时成功,要么同时失败.与数据库中的原子性类似.
 - 不保证**原子性**测试


```java
class A {
    volatile int number = 0;
   /** 
   	如果要解决原子性的问题可以用synchronized 关键字(这种太浪费性能)
   	可用JUC下的 AtomicInteger 来解决
   	**/
    public void numberTo100() {
        this.number = 100;
    }

    public void addPlusplus() {
        this.number++;
    }
}

public static void main(String[] args) {
        A a = new A();
        for (int i = 0; i < 20; i++) {
            new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    a.addPlusplus();
                }
            }, String.valueOf(i)).start();
        }
        // 如果当前线程大于 2 个(包括main线程) 礼让线程继续执行上边的线程
        while (Thread.activeCount() > 2) {
            Thread.yield();
        }
        System.out.println(Thread.currentThread().getName() + " Thread is over\t" + a.number);

    }
```
- **不保证原子性的原因:** 由于各个线程之间都是复制主内存的数据到自己的工作空间里边修改数据,由于CPU的轮询反复切换,会导致数据丢失.即某个线程修改了数据,准备回主内存,此时 cpu 切换到另一个线程修改了数据,并且写回到了主内存,此时其他的线程不知道主内存的数据已经被更改,还会执行将之前从主内存复制的数据修改后的,写到主内存,这就导致了数据被覆盖,丢失.

 

#### 禁止指令重排(有序性)

- **概念:** 在多线程环境下,Java语句可能会不按照顺序执行,但要注意数据的依赖性
计算机在执行程序时,为了提高性能,编译器和处理器常常会做指令重排,一把分为以下几种
	- 单线程环境里面确保程序最终执行结果和代码顺序执行的结果一致.
处理器在进行重新排序是必须要考虑指令之间的**数据依赖性**
	- 多线程环境中线程交替执行,由于编译器优化重排的存在,两个线程使用的变量能否保持一致性是无法确定的,结果无法预测
- **volatile禁止指令重排原因:**		
由于编译器和处理器都能执行指令重排的优化如果在指令键加入一一条Memory barrier (内存屏障)则会告诉编译器和CPU,不管什么指令都不能和这条Memory barrier (内存屏障)指令重排序,也就是说**通过内存屏障禁止在内存屏障前后的指令重新排序优化.内存屏障的另一个作用就是强制刷出各种CPU缓存数据,因此任何CPU上的线程都能读取到这些数据的最新版**(可见性)

### 使用volatile经典案例

````java
/**
多线程下的单例模式 DCL(double check lock)
**/
public SingletonDemo{
		// volatile 此处作用 禁止指令重排
		public static volatile SingletonDemo singleton = null;
		private Singleton(){}
		public SingletonDemo getInstance(){
			if(singleton == null){
				synchronized(SingletonDemo.class){
						if(singleton == null){
							singleton = new SingletonDemo();	
						}
				}
			}
		}
}
 
````
#### 解析

多线程下的 DCL（双端检索）单例模式,如果不加volatile不是绝对安全的,因为在创建对象的时候JVM底层会进行三个步骤:	

  - 1.分配对象的内存空间
  - 2.初始化对象
  - 3.设置对象指向刚刚分配的内存地址

其中步骤2和步骤3是没有数据依赖关系的,而且无论重排前还是重排后的程序执行结果在单线程中并没有改变,因此这种重排优化是允许的.
所以有可能先执行步骤3在执行步骤2,导致分配的对象不为null,但对象没有被初始化.所以当一个线程获取对象不为null时,由于对象未必已经完成初始化,所以存在线程安全问题



# 反射

## 概述
### 什么是反射
在运行状态中，对于任意一个实体类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意方法和属性；这种动态获取信息以及动态调用对象方法的功能称为**Java语言的反射机制。**

>反射是Java语言的一个特性，它允许程序在运行时来进行自我检查并且对内部的成员进行操作.


**通过反射，我们可以在运行时获得程序或程序集中每一个类型的成员和成员的信息。程序中一般的对象的类型都是在编译期就确定下来的，而 Java 反射机制可以动态地创建对象并调用其属性，这样的对象的类型在编译期是未知的。所以我们可以通过反射机制直接创建对象，即使这个对象的类型在编译期是未知的.**

反射的核心是JVM在运行时才动态加载类或调用方法/访问属性，它不需要事先（写代码的时候或编译期）知道运行对象是谁。

## 反射的作用
在运行时判断任意一个对象所属的类。

在运行时判断任意一个类所具有的成员变量和方法。

在运行时任意调用一个对象的方法

在运行时构造任意一个类的对象

### 反射与注解

注解我们经常会遇到,如:`@Override, @Deprecated ...`

是否思考过注解是怎样工作的呢?
让我们自定义注解体会一下注解是怎样工作的.

创建注解: `MyAnnotation`
```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 元注解详细查看 注解篇
 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {
    String value() default "";
}
```
使用注解: `MyAnnotationTest`
```java
public class MyAnnotationTest {

    @MyAnnotation("123")
    public void test(String str){
        System.out.println("invoke test ...param: "+ str);
    }

    public void t2(){
        System.out.println("I am t2 ...");
    }

}
```
实现注解`AnnotationInvoke`
```java
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class AnnotationInvoke {



    public static void main(String[] args) throws NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
        // 获取使用@MyAnnotation注解的类,这里举例子 就直接写了,如果想要实现的话可以参照spring扫描包
        Class<MyAnnotationTest> clazz = MyAnnotationTest.class;
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            //判断该类是否使用了 @MyAnnotation注解
            MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
            if (annotation != null) {
                // 可以进行一系列操作 ...
                // 获取该方法上 @MyAnnotation 注解的值
                System.out.println(annotation.value());
                // 执行test方法
                if (method.getName().equals("test")) {
                    method.invoke(clazz.newInstance(), "hello ...");
                }
            }
        }
    }
}
```
执行`main`方法,结果
```java
123
invoke test ...param: hello ...
```
是不是对反射有了不一样的体会呢?


### 反射与枚举

经典案例: 用枚举实现 单例设计模式 防止反射破坏单例
```java
public enum EnumSingleton {

    INSTANCE;

    public EnumSingleton getInstance(){
        return INSTANCE;
    }

    public static void main(String[] args) throws IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchMethodException {
        EnumSingleton singleton1=EnumSingleton.INSTANCE;
        EnumSingleton singleton2=EnumSingleton.INSTANCE;
        System.out.println("正常情况下，实例化两个实例是否相同："+(singleton1==singleton2));
        Constructor<EnumSingleton> constructor= null;
        constructor = EnumSingleton.class.getDeclaredConstructor();
        constructor.setAccessible(true);
        EnumSingleton singleton3= null;
        singleton3 = constructor.newInstance();
        System.out.println(singleton1+"\n"+singleton2+"\n"+singleton3);
        System.out.println("通过反射攻击单例模式情况下，实例化两个实例是否相同："+(singleton1==singleton3));
    }


}

```
结果
```
正常情况下，实例化两个实例是否相同：true
Exception in thread "main" java.lang.NoSuchMethodException
```
原因
`Constructor`类中 `newInstance`方法 不能通过反射来创建对象

```java
    @CallerSensitive
    public T newInstance(Object ... initargs)
        throws InstantiationException, IllegalAccessException,
               IllegalArgumentException, InvocationTargetException
    {
        if (!override) {
            if (!Reflection.quickCheckMemberAccess(clazz, modifiers)) {
                Class<?> caller = Reflection.getCallerClass();
                checkAccess(caller, clazz, null, modifiers);
            }
        }
        if ((clazz.getModifiers() & Modifier.ENUM) != 0)
            throw new IllegalArgumentException("Cannot reflectively create enum objects");
        ConstructorAccessor ca = constructorAccessor;   // read volatile
        if (ca == null) {
            ca = acquireConstructorAccessor();
        }
        @SuppressWarnings("unchecked")
        T inst = (T) ca.newInstance(initargs);
        return inst;
    }

```


所以枚举类无法通过反射来创建对象,原因是`newInstance`方法加了判断如果是枚举类就抛出异常`throw new IllegalArgumentException("Cannot reflectively create enum objects");`

除了不能创建枚举类的对象外,反射还是能够调用枚举类的方法的

```java
public enum EnumSingleton {

    public EnumSingleton getInstance(){
        return INSTANCE;
    }

    public void getTst(){
        System.out.println("enum method ...");
    }
    
    public static void main(String[] args) throws IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchMethodException, ClassNotFoundException {
        Class<?> aClass = Class.forName("com.test.EnumSingleton");
        Method getInstance = aClass.getMethod("getTst");
        // 枚举对应的class没有newInstance方法，会报NoSuchMethodException，应该使用getEnumConstants方法
        Object[] oo = aClass.getEnumConstants();
        getInstance.invoke(oo[0]);
        Method getTst = aClass.getMethod("getTst");
        getTst.invoke(oo[0]);
    }
}
```
结果
```
enum getInstance ... 
enum method ...
```

### 反射与泛型

反射会擦除泛型,因为泛型只在编译期间生效.而反射是在Java程序运行期间生效

```java
public static void main(String[] args) throws Exception {

        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(1);  //这样调用 add 方法只能存储整形，因为泛型类型的实例为 Integer

        list.getClass().getMethod("add", Object.class).invoke(list, "string");

        for (int i = 0; i < list.size(); i++) 
            System.out.println(list.get(i));// 1 string
        //list.forEach(System.out::print);  //语法详情 见Java8 Lambda表达式
    }
```

### 反射与框架

**反射最重要的用途就是开发各种通用框架.**

以 spring的 IOC 框架为例.
文章: [反射与工工厂模式实现IOC](https://blog.csdn.net/fuzhongmin05/article/details/61614873)



## 操作反射
在Java中，只要给定类的名字，那么就可以通过反射机制来获得类的所有信息.

使用反射会有异常出现.注意处理异常


Class类 和 ``java.lang.reflect``一起对反射提供了支持，``java.lang.reflect ``类库主要包含了以下三个类：
- Field:可以使用``get()``和``set()``方法读取和修改Field对象关联的字段;


- Method:可以使用 ``invoke()`` 方法调用与 ``Method`` 对象关联的方法;


- Constructor:可以用 ``Constructor ``的 ``newInstance()`` 创建新的对象。

### 获取
在程序运行时,反射可以获取Java类中所有的属性,下边举几个经常用的栗子

#### 获取反射入口
在操作反射前我们要先了解一些Class类
>Java的Class类是java反射机制的基础,通过Class类我们可以获得关于一个类的相关信息.<br>
虚拟机为每种类型管理一个独一无二的Class对象。也就是说，每个类（型）都有一个Class对象。运行程序时，Java虚拟机(JVM)首先检查是否所要加载的类对应的Class对象是否已经加载。如果没有加载，JVM就会根据类名查找.class文件，并将其Class对象载入

```java
private  Class(ClassLoader loader) { 
    classLoader = loader; 
}
```
class类的构造器时私有的,只有JVM可以创建Class的对象，因此不可以像普通类一样new一个Class对象, 但是却可以通过已有的类得到一个Class对象，共有三种方式

在运行时获取 class 的对象.

1. ``Class.forName("包名+类名");``
例如 连接Oracle数据库加载JDBC驱动
```java
// 注意此种方式请写全类名(包名+类名)
String driver = "oracle.jdbc.driver.OracleDriver";
Class.forName(driver);
```
2. ``类名.class``

```java
Class<?> clazz = int.class;
Class<?> classInt = Integer.TYPE;
```
3. 调用某个对象的`getClass()`方法. ``实例.getClass()``

```java
StringBuilder str = new StringBuilder("123");
Class<?> clazz = str.getClass();
```


反射可以提供运行时的类信息，并且这个类可以在运行时才加载进来，甚至在编译时期该类的 .class 不存在也可以加载进来。

#### 获取方法
创建`MainTest`类,A类,创建一个B类和C接口.让A类去继承B类.A类实现C接口,`MainTest`为主类,A类,B类为内部类
```java
public class MainTest {

   class B{
        private void privateMethodB(){
            System.out.println("private method B ...");
        }

        void defaultMethodB(){
            System.out.println("default method B... ");
        }

        protected void protectedMethodB(){
            System.out.println("protected method B...");
        }

        public void publicMethodB(){
            System.out.println("public method B...");
        }
    }
    
    interface C{}

    class A extends B implements C{

        private void privateMethod(){
            System.out.println("private method ...");
        }

        void defaultMethod(){
            System.out.println("default method ... ");
        }

        protected void protectedMethod(){
            System.out.println("protected method ...");
        }

        public void publicMethod(){
            System.out.println("public method ...");
        }

    }
}
```
- `getDeclaredMethods` 方法返回类或接口声明的所有方法，包括公共、保护、默认（包）访问和私有方法，但不包括继承的方法。
执行下边代码
```java
    @Test
    public void contextLoad() throws ClassNotFoundException {
        Class<?> clazz = Class.forName("com.test.MainTest$A");
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method);
        }
    }
```
打印结果
```
public void com.test.MainTest$A.publicMethod()
private void com.test.MainTest$A.privateMethod()
void com.test.MainTest$A.defaultMethod()
protected void com.test.MainTest$A.protectedMethod()
```
- `getMethods`方法返回某个类的所有公用`public`方法，包括其继承类的公用方法.
```java
    @Test
    public void contextLoad() throws ClassNotFoundException {
        Class<?> clazz = Class.forName("com.test.MainTest$A");
        Method[] methods = clazz.getMethods();
        for (Method method : methods) {
            System.out.println(method);
        }
    }
```
打印结果
```java
public void com.test.MainTest$A.publicMethod()
public void com.test.MainTest$B.publicMethodB()
public final void java.lang.Object.wait() throws java.lang.InterruptedException
public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
public boolean java.lang.Object.equals(java.lang.Object)
public java.lang.String java.lang.Object.toString()
public native int java.lang.Object.hashCode()
public final native java.lang.Class java.lang.Object.getClass()
public final native void java.lang.Object.notify()
public final native void java.lang.Object.notifyAll()
// 接口也被打印了
public default void com.test.MainTest$C.interfaceC()
```
- `getMethod`方法返回一个特定的方法，其中第一个参数为方法名称，后面的参数为方法的参数对应`Class`的对象.只能获取到`public`修饰的方法.能获取到接口和父类的`public`修饰的方法
```java
    @Test
    public void contextLoad() throws ClassNotFoundException, NoSuchMethodException {
        Class<?> clazz = Class.forName("com.test.MainTest$A");
        System.out.println(clazz.getMethod("publicMethod"));
//        System.out.println(clazz.getMethod("defaultMethod"));
//        System.out.println(clazz.getMethod("protectedMethod"));
//        System.out.println(clazz.getMethod("privateMethod"));
        System.out.println(clazz.getMethod("publicMethodB"));
        System.out.println(clazz.getMethod("interfaceC"));
    }
```
打印结果
```java
public void com.test.MainTest$A.publicMethod()
public void com.test.MainTest$B.publicMethodB()
public default void com.test.MainTest$C.interfaceC()
```



#### 获取类成员信息

- `getFiled`：访问公有的成员变量
- `getDeclaredField`：所有已声明的成员变量，但不能得到其父类的成员变量
- `getFileds` 和 `getDeclaredFields` 方法用法同上（参照 获取方法）.

### 创建

- 创建数组
```java
public static void testArray() throws ClassNotFoundException {
        Class<?> cls = Class.forName("java.lang.String");
        Object array = Array.newInstance(cls,25);
        //往数组里添加内容
        Array.set(array,0,"hello");
        Array.set(array,1,"Java");
        Array.set(array,2,"fuck");
        Array.set(array,3,"Scala");
        Array.set(array,4,"Clojure");
        //获取某一项的内容
        System.out.println(Array.get(array,3));
    }
```
- 创建对象
通过Class类的`getConstructor`方法得到`Constructor`类的一个实例，而`Constructor`类有一个`newInstance`方法可以创建一个对象实例,创建之前要确保该类存在构造无参构造器

```java
    @Test
    public void contextLoad() throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException {
        Class<?> clazz = Class.forName("com.test.MainTest");
        System.out.println(clazz.newInstance());
    }
```
打印结果
```java
com.test.MainTest@65e579dc
```

### 调用方法

在`MainTest` 加入该方法
```Java
    public void T(){
        System.out.println("t method invoke ... ");
    }
```
执行
```Java
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
        Class<?> outerClass = Class.forName("com.MainTest");
        outerClass.getMethod("T").invoke(outerClass.newInstance());
    }
```
结果
```
t method invoke ... 
```
内部类调用方法方式
```java
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InstantiationException, InvocationTargetException {
        Class<?> outerClass = Class.forName("com.MainTest");
        Class<?> innerClass = Class.forName("com.MainTest$A");
        Method method = innerClass.getDeclaredMethod("publicMethod");
        Object o = innerClass.getDeclaredConstructors()[0].newInstance(outerClass.newInstance());
        method.invoke(o);
    }
```
执行结果
```Java
public method ...
```
当内部类私有化（private class InnerClass）时，也可以调用,这里就不列举了

## 反射的优点

通过反射机制我们可以获得类的各种内容，进行反编译。对于JAVA这种先编译再运行的语言来说，反射机制可以使代码更加灵活，更加容易实现面向对象.

- 可扩展性 ：应用程序可以利用全限定名创建可扩展对象的实例，来使用来自外部的用户自定义类。


- 类浏览器和可视化开发环境 ：一个类浏览器需要可以枚举类的成员。可视化开发环境（如IDE）可以从利用反射中可用的类型信息中受益，以帮助程序员编写正确的代码。


- 调试器和测试工具 ： 调试器需要能够检查一个类里的私有成员。测试工具可以利用反射来自动地调用类里定义的可被发现的API定义，以确保一组测试中有较高的代码覆盖率。

## 反射的缺点

反射功能虽然强大,但不应任意使用.如果一个功能可以不用反射完成，那么最好就不用。通过反射访问代码时，应牢记以下注意事项

- 性能开销 ：反射涉及了动态类型的解析，所以 JVM 无法对这些代码进行优化。因此，反射操作的效率要比那些非反射操作低得多。我们应该避免在经常被执行的代码或对性能要求很高的程序中使用反射。


- 安全限制 ：使用反射技术要求程序必须在一个没有安全限制的环境中运行。如果一个程序必须在有安全限制的环境中运行，如 ``Applet``，那么这就是个问题了。


- 内部暴露 ：由于反射允许代码执行一些在正常情况下不被允许的操作（例如访问`private`字段和方法），所以使用反射可能会导致意料之外的副作用，这可能导致代码功能失调并破坏可移植性。反射代码破坏了抽象性，因此可能会随着平台的升级而改变行为.


# 异常


## 异常类型

``Throwable`` 可以用来表示任何可以作为异常抛出的类，分为两种： Error 和 Exception。其中 Error 用来表示 JVM 无法处理的错误，Exception 分为两种：

- 受检异常 ：需要用`` try...catch... ``语句捕获并进行处理，并且可以从异常中恢复；

  ```java
  public void test() throw new Exception{ }
  ```

  当我们希望我们的⽅法调⽤者， 明确的处理⼀些特殊情况的时候， 就应该使⽤受检异常

  

- 非受检异常 ：是程序运行时错误，例如除 0 会引发 ``ArithmeticException`` ，此时程序崩溃并且无法恢复。

```java
public void test() {
	int a = 1;
	int b = a/0;
}
```

这种异常⼀般可以理解为是代码原因导致的。 ⽐如发⽣空指针、 数组越界等。 所以， 只要代码写的没问题， 这些异常都是可以避免的。 也就不需要我们显⽰的进⾏处理.

Exception 表⽰程序需要捕捉、 需要处理的常， 是由与程序设计的不完善⽽出现的问题， 程序必须处理的问题。

## 自定义异常

- 继承``Exception``,构造方法(调用父类的)
- 大多数情况下都会继承``Runtime Exception``

```java
class TestException extends Exception {//getMessage();
    private int value;
    public FuShuException() {
        super();
    }
    public TestException (String msg,int value) {
        super(msg);
        this.value=value;
    }
    public int getValue() {
        return value;
    }  
}
```

## 异常链

**异常链 是Java中⾮常流⾏的异常处理概念， 是指在进⾏⼀个异常处理时抛出了另外⼀个异常， 由此产⽣了⼀个异常链条。**

如果因为因为异常你决定抛出⼀个新的异常， 你⼀定要包含原有的异常， 这样， 处理程序才可以通过``getCause()``和``initCause()``⽅法来访问异常最终的根源。

```java
try {

} catch (IOException e) {
    throw new SampleException("Other IOException", e);
}

```

在此示例中，当捕获到``IOException``时，将创建一个新的``SampleException``异常，并附加原始的异常原因，并将异常链抛出到下一个更高级别的异常处理程序。<br>

## 处理异常

异常的处理⽅式有两种。 1、 ⾃⼰处理。 2、 向上抛， 交给调⽤者处理。异常， 千万不能捕获了之后什么也不做。 或者只是使⽤`e.printStacktrace`

### try和catch、finally

一个try对应多个catch,最后可用finally关闭资源 多重捕获

```java
try{
   // 程序代码
}catch(异常类型1 异常的变量名1){
  // 程序代码
}catch(异常类型2 异常的变量名2){
  // 程序代码
}catch(异常类型3 异常的变量名3){
  // 程序代码
}
```

```java
try{
	// 程序代码
} catch (异常类型1 | 异常类型2 | 异常类型3 e) {
	 // 程序代码
}
```



**根据JVM规范**如果try语句块里边有返回值则返回try{}里边的;如果try{}和finally{}都有return,则忽略try{}里边的使用finally{}里边的return; **finally 语句块是在 try 或者 catch 中的 return 语句之前执行的。** 无论是否发生异常，finally 代码块中的代码总会被执行.

```java
try{
  // 程序代码
  return a;
}catch(异常类型2 异常的变量名2){
  // 程序代码
  return b;
}finally{
  // 程序代码
  return c;
}
```

**finally语句块什么时候不执行**

如果当一个线程在执行 try 语句块或者 catch 语句块时被打断（interrupted）或者被终止（killed）或退出虚拟机(`System.exit(0)`)，与其相对应的 finally 语句块可能不会执行。还有更极端的情况，就是在线程运行 try 语句块或者 catch 语句块时，突然死机或者断电，finally 语句块肯定不会执行了。

**JVM先会把try或者catch代码块中的返回值保留，再来执行finally代码块中的语句，等到finally代码块执行完毕之后，在把之前保留的返回值给返回出去。  这条规则（保留返回值），只适用于 return和throw语句，不适用于break和continue语句，因为它们根本就没有返回值。**

```java
package com.test;
 
public class MyTest {
 
	public static void main(String[] args) {
 
		System.out.println("main 代码块中的执行结果为：" + myMethod());
	}
 
	public static int myMethod() {
 
		int i = 1;
		try {
 
			System.out.println("try 代码块被执行！");
			return i;
		} finally {
			++i;
			System.out.println("finally 代码块被执行！");
			System.out.println("finally 代码块中的i = " + i);
		}
 
	}
 
}
```



try后边不是必须跟catch{},可以跟finally{}

```java
try{
	// 程序代码
} finally{
	// 程序代码
}
```

### throws、throw

- `throws` 用在方法上声明异常,子类继承的时候要继承该异常或者该异常的子类,不处理异常,谁调用该方法谁处理异常, 语法(可以抛出多个异常):

```java
public static void main(String[] args) throws Exception {}
```

- `throw`是语句抛出一个异常 new 异常对象 例如:

```java
throw new RuntimeException("这是运行中的异常");
```



# 泛型

## 概述

泛型是Java的一种安全机制,是一种规范,在编译的时候检查类型安全，并且所有的强制转换都是自动和隐式的，提高代码的重用率。

泛型最⼤的好处是可以提⾼代码的复⽤性。 以List接⼜为例，我们可以将String、 Integer等类型放⼊List中， 如不⽤泛型， 存放String类型要写⼀个List接口， 存放Integer要写另外⼀个List接口， 泛型可以很好的解决这个问题。

## 泛型擦除

**泛型只在编译阶段有效  泛型擦除充分说明了这一观点**

### 概念

> 类型擦除指的是通过类型参数合并，将泛型类型实例关联到同一份字节码上。编译器只为泛型类型生成一份字节码，并将其实例关联到这份字节码上。类型擦除的关键在于从泛型类型中清除类型参数的相关信息，并且再必要的时候添加类型检查和类型转换的方法。 类型擦除可以简单的理解为将泛型java代码转换为普通java代码，只不过编译器更直接点，将泛型java代码直接转换成普通java字节码。 类型擦除的主要过程如下： 1.将所有的泛型参数用其最左边界（最顶级的父类型）类型替换。（这部分内容可以看：[Java泛型中extends和super的理解](http://hollischuang.gitee.io/tobetopjavaer/#/archives/255)） 2.移除所有的类型参数。

### 反射擦除泛型

反射会擦除泛型,因为泛型只在编译期间生效.而反射是在Java程序运行期间生效

```java
public static void main(String[] args) throws Exception {

        ArrayList<Integer> list = new ArrayList<Integer>();

        list.add(1);  //这样调用 add 方法只能存储整形，因为泛型类型的实例为 Integer

        list.getClass().getMethod("add", Object.class).invoke(list, "string");

        for (int i = 0; i < list.size(); i++) 
            System.out.println(list.get(i));// 1 string
        //list.forEach(System.out::print);  //语法详情 见Java8 Lambda表达式
    }
```

### Java编译器擦除泛型

```java
public static void main(String[] args) {  
    Map<String, String> map = new HashMap<String, String>();  
    map.put("name", "hollis");  
    map.put("age", "22");  
    System.out.println(map.get("name"));  
    System.out.println(map.get("age"));  
}  

```

反编译后

```java
public static void main(String[] args) {  
    Map map = new HashMap();  
    map.put("name", "hollis");  
    map.put("age", "22"); 
    System.out.println((String) map.get("name"));  
    System.out.println((String) map.get("age"));  
}  

```

Java中的泛型，只在编译阶段有效。在编译过程中，正确检验泛型结果后，会将泛型的相关信息擦出，并且在对象进入和离开方法的边界处添加类型检查和类型转换的方法。也就是说，泛型信息不会进入到运行时阶段。

## 泛型带来的问题

### 当泛型遇到重载

```java
public class GenericTypes {  

    public static void method(List<String> list) {  
        System.out.println("invoke method(List<String> list)");  
    }  

    public static void method(List<Integer> list) {  
        System.out.println("invoke method(List<Integer> list)");  
    }  
}  

```

上面这段代码，有两个重载的函数，因为他们的参数类型不同，一个是`List<String>`另一个是`List<Integer>` ，但是，这段代码是编译通不过的。因为我们前面讲过，参数`List<Integer>`和`List<String>`编译之后都被擦除了，变成了一样的原生类型List，擦除动作导致这两个方法的特征签名变得一模一样。

### 当泛型遇到catch

如果我们自定义了一个泛型异常类``GenericException<T>``，那么，不要尝试用多个catch取匹配不同的异常类型，例如你想要分别捕获``GenericException``、``GenericException``，这也是有问题的。

### 当泛型内包含静态变量

泛型类的所有静态变量是共享的。

```java
public class StaticTest{
    public static void main(String[] args){
        GT<Integer> gti = new GT<Integer>();
        gti.var=1;
        GT<String> gts = new GT<String>();
        gts.var=2;
        // 2
        System.out.println(gti.var);
    }
}
class GT<T>{
    public static int var=0;
    public void nothing(T x){}
}
```

## 通配符

1. `限定通配符`对类型进⾏限制， 泛型中有两种限定通配符：

- 表示类型的上界，格式为：`<？ extends T>`，即类型必须为T类型或者T子类 

- 表示类型的下界，格式为：`<？ super T>`，即类型必须为T类型或者T的父类

泛型类型必须⽤限定内的类型来进⾏初始化，否则会导致编译错误。

2. ⾮限定通配符`表⽰可以⽤任意泛型类型来替代，类型为`<T>

## 注意事项

- 泛型的类型参数只能是类类型，不能是基本类型。

- 不能对确切的泛型类型使用instanceof操作。如下面的操作是非法的，编译时会出错。

  ```java
  if(ex_num instanceof Generic<Number>){ }
  ```

-  `List<?>` 是一个未知类型的List，而`List<Object>` 其实是任意类型的List。你可以把`List<String>`, L`ist<Integer>`赋值给`List<?>`，却不能把`List<String>`赋值给 `List<Object>`。

> 1.虚拟机中没有泛型，只有普通类和普通方法,所有泛型类的类型参数在编译时都会被擦除,泛型类并没有自己独有的Class类对象。比如并不存在`List<String>`.class或是`List<Integer>.class`，而只有`List.class`。
>
> 2.创建泛型对象时请指明类型，让编译器尽早的做参数检查（**Effective Java，第23条：请不要在新代码中使用原生态类型**）
>
> 3.不要忽略编译器的警告信息，那意味着潜在的`ClassCastException`等着你。 
>
> 4.静态变量是被泛型类的所有实例所共享的。对于声明为`MyClass<T>`的类，访问其中的静态变量的方法仍然是 `MyClass.myStaticVar`。不管是通过`new MyClass<String>`还是`new MyClass<Integer>`创建的对象，都是共享一个静态变量。
>
> 5.泛型的类型参数不能用在`Java`异常处理的`catch`语句中。因为异常处理是由JVM在运行时刻来进行的。由于类型信息被擦除，`JVM`是无法区分两个异常类型`MyException<String>`和`MyException<Integer>`的。对于`JVM`来说，它们都是 `MyException`类型的。也就无法执行与异常对应的`catch`语句。

# 注解

## 概述

Java 注解是附加在代码中的一些元信息，用于一些工具在编译、运行时进行解析和使用，起到说明、配置的功能。注解不会也不能影响代码的实际逻辑，仅仅起到辅助性的作用。

## 元注解

负责新注解的创建. 除了元注解，都是自定义注解。通过元注解定义出来的注解。 如我们常用的`Override` 、`Autowire`等。 日常开发中也可以自定义一个注解，这些都是自定义注解。

- **@Target**

表示该注解可以用于什么地方，可能的ElementType参数有：CONSTRUCTOR：构造器的声明、FIELD：域声明（包括enum实例）、LOCAL_VARIABLE：局部变量声明、METHOD：方法声明、PACKAGE：包声明、PARAMETER：参数声明、TYPE：类、接口（包括注解类型）或enum声明

- **@Retention**

表示需要在什么级别保存该注解信息。可选的RetentionPolicy参数包括：SOURCE：注解将被编译器丢弃、CLASS：注解在class文件中可用，但会被VM丢弃、RUNTIME：VM将在运行期间保留注解，因此可以通过反射机制读取注解的信息

- **@Document**

将注解包含在Javadoc中

- **@Inherited**

允许子类继承父类中的注解

## 常用注解

- `@Override`，表示当前的方法定义将覆盖超类中的方法.
- `@Deprecated`，使用了注解为它的元素编译器将发出警告，因为注解@Deprecated是不赞成使用的代码，被弃用的代码.
- `@SuppressWarnings`，关闭不当编译器警告信息.
- `@FunctionalInterface `(JDK1.8更新) 表示：用来指定某个接口必须是函数式接口，否则就会编译出错
