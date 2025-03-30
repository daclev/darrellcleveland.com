---
title:  Learning to Program
author: Darrell Cleveland
date: March 15, 2025
---

## Post #4 - An approach to learning the basics.
*Last Updated: March 29, 2025*

*Where to start if you wish to learn how to program?*  

There are tons of options, and no single correct answer.  

Becoming a software developer, starts by requiring a foundation of core programming concepts and problem solving with these concepts. And, how does someone obtain a strong foundation and learn to problem solve?   
The answer is... **practice**! 

Just like a professional musician, athlete, surgeon, and so many other disciplines, professional software developers have to practice! It is not enough to just learn. It is not enough to borrow an algorithm and make it your own. To truly obtain the skills required to become a software developer, to develop good solutions, to thrive in this field, practice. Then review. And practice some more.

So again, where should someone start?  
Here is a list of books I can recommend. These are beginner level. There are tons of other options (languages).

| Language | Book - Amazon Link  |
|----------|:------------|
| C | [The C Programming Language](https://amzn.to/3RcreDv) |
| Go | [The Go Programming Language](https://amzn.to/3FvgtK1) |
| Java | [Building Java Programs: A Back to Basics Approach 5e](https://amzn.to/4ktWgEu)  |


Folks reading this with some technical background might be rolling their eyes 🙄 at the recommendations. That is okay. Everyone is welcome to their own opinion. Why might someone disapprove of these choices? 

Well, honestly C is not the easiest language to understand.. also, the C programming language is old, like ancient (created in 1972)! But, the c89 specification was only 200 pages. And, C99/11/17 specification is roughly 600 pages. The language is considered small when compared to others. However, it is most likely the most powerful language today. Multiple modern languages we use today are wrote in C, and there is a good reason why.

And Java? Also another dinosaur from another era. The Java language gets a lot of hate for being verbose. Recent versions of Java have started to alleviate this a little, but programs written in Java will most likely be a little longer than those written in newer languages. Some folks consider Java a tough a first language to learn.

So why would I recommend these?

Many modern languages have the right idea by completely abstracting low level concepts that allow programmers to implement bad practices. My thoughts are that if the opportunity to implement a concept is not possible, then the concept will not be understood which will hinder learning and complete knowledge of the subject. Therefore, I suggest favoring a language such as C++, C#, Java, Kotlin, Go (2nd), Rust (2nd), Typescript/JavaScript, and few more. From this short list, all but Typescript/JavaScript support slightly more advanced topics such as threading. Go and Rust limit inheritance to encourage the idea of such as composition over inheritance, a good rule to follow. To me, it makes sense to start with a language that is used in industry, is mature, and allows the developer to explore advanced topics.  

## Hello, World!
Lets peek a few of the languages mentioned.

C 
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}

```

Java
```java
public class HelloWorld {
      public static void main(String[] args) {
            System.out.println("Hello, world!");
      }
}
```

Go
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

When comparing the "Hello, World" programs above, they all look similar. That is because all languages at the minimum must have: lexicon (key words, identifiers, symbols with some meaning), syntax (grammar rules), and semantics (meaning). Otherwise, it would not be a language. The pragmatics of the language is mostly why there are different languages. Different strokes for different folks. Other ideas to consider in a language consist of: types, memory model, concurrency, execution, and I am sure loads of language consideration are missing from this.

Look closely at my list, I favor compiled languages over interpreted, except when considering web programming (TypeScript/JavaScript). A decent web browsers will support HTML, CSS, and JavaScript. The language constructs run on a JS Engine (a framework for the web).

### Final thoughts.
Just start somewhere. Books are not the only way, and are more for a complete understanding. A good tutorial goes a long way. Many sites and platforms are dedicated to teaching programming. Get a feel for few language. After trying some, dig into one that feels right. 

Hope this content is helpful.  
Thanks for reading!