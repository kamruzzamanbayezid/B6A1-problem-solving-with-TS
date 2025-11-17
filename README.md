# What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof`keyword হলো TypeScript-এর একটি টুল যার মূল কাজ হলো একটি **Object Type**-এর মধ্যে যতগুলো key বা Property Name আছে, সেগুলোকে নিয়ে একটি Union Type তৈরি করা।

## `keyof` কেন ব্যবহার করা হয়?

সহজ কথায় যদি বলি, এটি আমাদের বলে দেয় যে একটি নির্দিষ্ট object-এ কী কী নামের Property ব্যবহার করা যেতে পারে।

### উদাহরনঃ 

```typescript
type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};

type KeysOfPerson = keyof Book;
//  এখানে'keyof' ব্যবহার করে key গুলো বের করা হলো

// KeysOfPerson টাইপটি এখন হবে: "name" | "age" | "isMarried"
// (অর্থাৎ, এই তিনটি string ছাড়া অন্য কোনো কিছু এই টাইপে রাখা যাবে না)
```


# Explain the difference between any, unknown, and never types in TypeScript.

## `any` (যেকোনো) - এর কোনো Type Safety নেই

`any` হলো TypeScript-এর সবচেয়ে শিথিল টাইপ। এটি ব্যবহার করলে Type Checking অক্ষম হয়ে যায়।

* "আমি জানি না এটা কী টাইপ, আর জানার প্রয়োজনও নেই। একে যা খুশি তাই করতে দাও।"
* তবে এটি আপনার কোডে bugs তৈরি করতে পারে।
* **উদাহরণ:**
    ```typescript
    let valueAny: any = 42; 
    valueAny.doSomething(); // কোনো error দেবে না।
    ```

---

## `unknown` 

`unknown` হলো `any` এর মতোই কিন্তু এটা `any`-এর চেয়ে অনেক বেশি নিরাপদ।

* "আমি জানি না কী টাইপ, কিন্তু এটি ব্যবহার করার আগে আমাকে বাধ্য করে type checking করার জন্য।"
* `unknown` টাইপের ভেরিয়েবল সরাসরি ব্যবহার করা যায় না; ব্যবহারের আগে অবশ্যই **Type Guard** (যেমন `typeof`) দিয়ে টাইপ নিশ্চিত করতে হয়।

* **উদাহরণ:**
    ```typescript
    let valueUnknown: unknown = "TypeScript"; 

    // Error: সরাসরি ব্যবহার করা যাবে না।
    // valueUnknown.toUpperCase(); 

    //  টাইপ নিশ্চিত করার পরে ব্যবহার করা যাবে।
    if (typeof valueUnknown === 'string') {
      console.log(valueUnknown.toUpperCase());T
    }
    ```

---

## `never` (কখনোই না) - কোনো মান নয়

`never` হলো TypeScript-এর এমন একটি টাইপ যা কখনোই কোনো মান ধারণ করতে পারে না এবং কখনোই সফলভাবে রিটার্ন করবে না।

* "এই কোডের অংশে কখনোই কোনো মান পৌঁছাতে পারবে না।"
* **ব্যবহার:**
    1.  যে ফাংশনগুলো ব্যতিক্রম।
    2.  যে ফাংশনগুলো infinite loop চালায়।

* **উদাহরণ:**
    ```typescript
    // ফাংশনটি একটি error through করবে, তাই এটি কখনোই সফলভাবে মান রিটার্ন করবে না।
    function throwError(message: string): never {
      throw new Error(message); 
    }
    ```

---
