import React from 'react';
import {
  IoBasketballOutline,
  IoCameraOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
} from 'react-icons/io5';

export default function About() {
  return (
    <>
      <h1 className="text-lg font-semibold my-2">About Me</h1>
      <div className="flex flex-col mb-4 text-lg tracking-wide gap-y-4 px-4">
        <p>
          I'm a tech enthusiast with 12 years of diverse industry experience 
          and a strong background of 7 years of experience in software engineering
          as a back-end developer, mobile developer, front-end developer, and 
          full-stack developer. 
        </p>
        <p>
          Now I'm transitioning my expertise to specialize in AI development, 
          leveraging detailed knowledge and honed skills to drive innovation 
          and create advanced, impactful solutions for organizations. 
          I'm eager to contribute to forward-thinking teams and contribute 
          to the advancement of AI-driven initiatives.
        </p>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vitae
          quas, a laborum consequatur deserunt laudantium assumenda,
          dignissimos, corporis dolores repudiandae recusandae. Voluptatem
          tempora, officia illum repellendus temporibus quidem sapiente.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem fuga nemo ducimus quas unde fugit deleniti nulla, ad numquam
          iusto. Aspernatur odio perferendis quisquam accusamus, obcaecati omnis
          fuga adipisci!
        </p> */}
      </div>
    </>
  );
}
