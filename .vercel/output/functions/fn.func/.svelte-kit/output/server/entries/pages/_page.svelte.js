import { c as create_ssr_component, b as add_attribute, v as validate_component, e as each, d as escape } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Smoljames Store",
      icon: "fa-solid fa-cart-shopping",
      description: "Smoljames Store is a a merchanising store created with Next.js, Commerce.js & Stripe! Commerce.js is a CMS for managing project and Stripe is used for all transaction handling."
    },
    {
      name: "Utlimate Todos",
      icon: "fa-solid fa-list-check",
      description: "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model."
    },
    {
      name: "Pokédex",
      icon: "fa-solid fa-diagram-project",
      description: "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon)."
    }
  ];
  let benefits = [
    {
      metric: "30x",
      name: "a self taught developer",
      description: "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more."
    },
    {
      metric: "10x",
      name: "a product design & UX finatic",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences."
    },
    {
      metric: "20x",
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl" data-svelte-h="svelte-1nxl64x">Hi! I&#39;m <span class="poppins text-violet-400">Daniel</span>
				Imman
				<br>Full Stack
				<span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl" data-svelte-h="svelte-19l3cp1">My <span class="text-violet-400">favorite tech</span> includes JavaScript
				(NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js &amp; PostgreSQL or
				Firebase/Firestore!</p> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-4fzmrn"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></button></div> <div class="relative shadow-2xl grid place-items-center" data-svelte-h="svelte-e6j2st"><img${add_attribute("src", "https://media.licdn.com/dms/image/D5603AQFOtqfPwwV_mg/profile-displayphoto-shrink_800_800/0/1693842168278?e=1718236800&v=beta&t=2zjoMLel5Q7kE0thEaz7lClvBavj7Qk2Auykf0pNUMk", 0)} alt="Zetane Engine" class="object-cover z-[2] max-h-[70vh]"></div></section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-1honort"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <a href="https://www.youtube.com/watch?v=-2UjwQzxvBQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200" data-svelte-h="svelte-l7i5be"><i class="fa-regular fa-circle-play"></i> <p>Watch the video</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-3bzh0h">Smoljames Store is a a merchanising store created with <strong class="text-violet-400">Next.js, Commerce.js, Stripe &amp; Node.js + Express.js!</strong> Commerce.js is a product CMS and Stripe is used for all transaction handling.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-k5xfxw">Ultimate Todos is a Full Stack <strong class="text-violet-400">Next.js</strong>,
					<strong class="text-violet-400">Node.js + Express.js</strong>
					&amp; <strong class="text-violet-400">Firebase</strong> CRUD application that
					allows a user to login, manage a tidy and efficacious todo list, and persist
					this information across devices.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-12n6wxl">The Pokédex is a <strong class="text-violet-400">SvelteKit &amp; TailwindCSS</strong>
					web application, hosted on
					<strong class="text-violet-400">Netlify</strong>, that consumes and
					caches the
					<strong class="text-violet-400">Pokémon API</strong>
					to display all Pokémon information. Gotta catch them all!</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-gozirt"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-em89dk">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex flex-col gap-2 mx-auto"><div class="flex items-end gap-4"><p class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium">${escape(benefit.metric)}</p> <p class="text-xl sm:text-2xl md:text-3xl capitalize pb-2">${escape(benefit.name)} </p></div> <p class="text-center italic">- ${escape(benefit.description)}</p></div> <div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins ", 0)} data-svelte-h="svelte-ccy4cg">The <span class="text-violet-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-q3b9ff"><table class="bg-white text-slate-700 rounded text-center"><thead${add_attribute("class", "border-b border-solid border-slate-200  ", 0)}><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-t border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Progamming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-1ldeall"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
