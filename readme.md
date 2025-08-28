Answer the following questions:
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
আই ডি সবসময় ইউনিক হয়, কিন্তু এলিমেন্ট কে লুপ চালিয়ে ব্যবহার করতে হয়। কুয়েরি সিলেক্টরে যে কোন সিএসএস সিলেক্টর দিয়ে সার্চ দিলে প্রথম এলিমেন্ট ফিরত দেয় কিন্তু অপরপক্ষে কুয়েরি সিলেক্টর অলের ক্ষেত্রে যে কোন সিএসএস দিয়ে সার্চ দিলে সব এলিমেন্টই ফেরত দেয়। দম পরিবর্তেনের ক্ষেত্রে শুধু ক্লাস এলিমেন্ট পরিবর্তন হয়, বাকি ৩টা কোন পরিবর্তন হয় না।
How do you create and insert a new element into the DOM?
document.createElement() লিখে নতুন element তৈরি করতে হবে প্রথমে। তারপরে সেই এলিমেন্টে এট্রিবিউট এড করতে হবে। চাইলে পূর্বে থেকে থাকা যে কোন এলিমেন্টে এট্রিবিউট এড করা যায়। appendChild() কে যে কোনো element-এর শেষে বসানো যায়।
prepend() কে যে কোনো element-এর শুরুতে বসানো যায়।
before() কে যে কোনো element-এর আগে বসানো যায়।
after() কে কোনো element-এর পরে বসানো যায়।
replaceWith() কে কোনো element-কে নতুন element দিয়ে বদলে দেয়া যায়।
What is Event Bubbling and how does it work?
JavaScript-এ যখন কোনো element-এ event (যেমন click) ঘটে, তখন সেটা শুধু ওই element-এই থেমে যায় না। Event টি ভেতর থেকে বাইরের দিকে (child → parent → grandparent → ... → document) এক এক করে উপরের element-গুলোতেও ছড়িয়ে পড়ে।
এই ছড়িয়ে পড়াকে বলে Event Bubbling।
What is Event Delegation in JavaScript? Why is it useful?
Event Delegation দিয়ে চাইলে আমরা অনেকগুলো child element-এর জন্য আলাদা আলাদা event listener না ব্যবহার করে, তাদের parent element-এ একটা listener ব্যবহার করি, আর event bubbling ব্যবহার করে বুঝি কোন child-এ event ঘটেছে।
What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() দিয়ে ব্রাউজারের ডিফল্ট কাজ আটকানো যায়।
আর stopPropagation() দিয়ে event উপরের element-এ যাওয়া আটকানো যায়।