import React from 'react';

const Blogs = () => {
    return (
       <>
       <div className='bg-slate-100 m-9 grid border-2 border-slate-900 rounded-md p-4'>
           <h1 className='text-xl font-bold'>1. Difference between javascript and nodejs?</h1>
           <div className=' p-2 rounded-md m-1'>
               <h1 className='text-xl font-bold border-b-2 border-slate-900 w-[fit-content]'>Javascript</h1>
               <p className='mt-2 text-lg font-sans'>1. Javascript is a programming language that is used for writing scripts on the website. </p>
               <p className='mt-2 text-lg font-sans'>2. Javascript can only be run in the browsers.	</p>
               <p className='mt-2 text-lg font-sans'>3. It is basically used on the client-side.	</p>
               <p className='mt-2 text-lg font-sans'>4. Javascript is capable enough to add HTML and play with the DOM. </p>
               <p className='mt-2 text-lg font-sans'>5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
               <p className='mt-2 text-lg font-sans'>6. Javascript is used in frontend development.	</p>
               <p className='mt-2 text-lg font-sans'>7. Some of the javascript frameworks are RamdaJS, TypedJS, etc. </p>
               <p className='mt-2 text-lg font-sans'>8. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </p>
           </div>
           <div className=' p-2 rounded-md m-1'>
               <h1 className='text-xl font-bold border-b-2 border-slate-900 w-[fit-content]'>NodeJS</h1>
               <p className='mt-2 text-lg font-sans'>1. NodeJS is a Javascript runtime environment.</p>
               <p className='mt-2 text-lg font-sans'>2. We can run Javascript outside the browser with the help of NodeJS.</p>
               <p className='mt-2 text-lg font-sans'>3. It is mostly used on the server-side.</p>
               <p className='mt-2 text-lg font-sans'>4. Nodejs does not have capability to add HTML tags.</p>
               <p className='mt-2 text-lg font-sans'>5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
               <p className='mt-2 text-lg font-sans'>6. Nodejs is used in server-side development.</p>
               <p className='mt-2 text-lg font-sans'>7. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </p>
               <p className='mt-2 text-lg font-sans'>8. Nodejs is written in C, C++ and Javascript.</p>
           </div>
       </div>
       <div className='bg-slate-100 m-9 grid border-2 border-slate-900 rounded-md p-4'>
           <h1 className='text-xl font-bold'>2. When should you use nodejs and when should you use mongodb?</h1>
           <div className=' p-2 rounded-md m-1'>
               <p className='mt-2 text-lg font-sans'> <span className='text-xl font-bold'>Nodejs:</span> Node.js is an interpreter or runtime/ running environment for JavaScript. built on Chrome's V8 JavaScript engine. responsibility is especially to execute my application.
MongoDB: is a No-SQL database for storing data. when i need high availability of data with automatic, fast, and instant data recovery.</p>
           </div>
       </div>

       <div className='bg-slate-100 m-9 grid border-2 border-slate-900 rounded-md p-4'>
           <h1 className='text-xl font-bold'>3. Differences between sql and nosql databases.</h1>
           <div className=' p-2 rounded-md m-1'>
               <h1 className='text-xl font-bold border-b-2 border-slate-900 w-[fit-content]'>SQL</h1>
               <p className='mt-2 text-lg font-sans'>1. SQL Relational. </p>
               <p className='mt-2 text-lg font-sans'>2. SQL use structured query language and have a predefined schema.	</p>
               <p className='mt-2 text-lg font-sans'>3. SQL vertically scalable are table based.	</p>
           </div>
           <div className=' p-2 rounded-md m-1'>
               <h1 className='text-xl font-bold border-b-2 border-slate-900 w-[fit-content]'>NoSQL</h1>
               <p className='mt-2 text-lg font-sans'>1. Non-relational</p>
               <p className='mt-2 text-lg font-sans'>2. NoSQL databases have dynamic schemas for unstructured data.</p>
               <p className='mt-2 text-lg font-sans'>3. NoSQL horizontally scalable. are document, key-value, graph or wide-column stores.</p>
               <p className='mt-2 text-lg font-sans'>4. NoSQL better for unstructured are horizontally scalable. are document, key-value, graph or wide-column stores.</p>
           </div>
       </div>
       <div className='bg-slate-100 m-9 grid border-2 border-slate-900 rounded-md p-4'>
           <h1 className='text-xl font-bold'>4. What is the purpose of jwt and how does it work?</h1>
           <div className=' p-2 rounded-md m-1'>
               
               <p className='mt-2 text-lg font-sans'> <span className='text-xl font-bold'>JWT:</span> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
           </div>
           
       </div>
       </>
    );
};

export default Blogs;