import React from 'react';
import './Blogs.css';

const Blogs = () => {
   return (
      <div className='blogs-contanier'>
         <div>
            <h1 className='font-bold'>Context API :</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
               It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>
         </div>
         <div>
            <h1 className='font-bold'>Semantic tags :</h1>
            <p>HTML5 semantic tags define the purpose of the element. By using semantic markup,help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.</p>
         </div>
         <div>
            <h1 className='font-bold'>Inline & Inline-block Element :</h1>
            <p>Inline element: Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content. Note: An inline element does not start on a new line and only takes up as much width as necessary
               Inline-Block element: What is an inline-block element?
               Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. You'll have to declare display: inline-block in your CSS code. One common use for using inline-block is for creating navigation links horizontally, as shown below.
            </p>
         </div>
      </div>
   );
};

export default Blogs;