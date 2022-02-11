/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '../../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div7;
	let div6;
	let div5;
	let div0;
	let img0;
	let img0_src_value;
	let t0;
	let div4;
	let div3;
	let div2;
	let div1;
	let h2;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let img1;
	let img1_src_value;
	let t5;
	let p1;
	let t6;
	let t7;
	let ul;
	let li0;
	let strong0;
	let t8;
	let t9;
	let t10;
	let li1;
	let strong1;
	let t11;
	let t12;
	let t13;
	let button;
	let i;
	let t14;

	return {
		c() {
			div7 = element("div");
			div6 = element("div");
			div5 = element("div");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			h2 = element("h2");
			t1 = text("Project Name");
			t2 = space();
			p0 = element("p");
			t3 = text("Lorem ipsum dolor sit amet consectetur.");
			t4 = space();
			img1 = element("img");
			t5 = space();
			p1 = element("p");
			t6 = text("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			strong0 = element("strong");
			t8 = text("Client:");
			t9 = text("\n                  Explore");
			t10 = space();
			li1 = element("li");
			strong1 = element("strong");
			t11 = text("Category:");
			t12 = text("\n                  Graphic Design");
			t13 = space();
			button = element("button");
			i = element("i");
			t14 = text("\n                Close Project");
			this.h();
		},
		l(nodes) {
			div7 = claim_element(nodes, "DIV", {
				class: true,
				id: true,
				tabindex: true,
				role: true,
				"aria-hidden": true
			});

			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true, "data-bs-dismiss": true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true });
			div0_nodes.forEach(detach);
			t0 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Project Name");
			h2_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Lorem ipsum dolor sit amet consectetur.");
			p0_nodes.forEach(detach);
			t4 = claim_space(div1_nodes);
			img1 = claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
			t5 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!");
			p1_nodes.forEach(detach);
			t7 = claim_space(div1_nodes);
			ul = claim_element(div1_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			strong0 = claim_element(li0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t8 = claim_text(strong0_nodes, "Client:");
			strong0_nodes.forEach(detach);
			t9 = claim_text(li0_nodes, "\n                  Explore");
			li0_nodes.forEach(detach);
			t10 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			strong1 = claim_element(li1_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t11 = claim_text(strong1_nodes, "Category:");
			strong1_nodes.forEach(detach);
			t12 = claim_text(li1_nodes, "\n                  Graphic Design");
			li1_nodes.forEach(detach);
			ul_nodes.forEach(detach);
			t13 = claim_space(div1_nodes);

			button = claim_element(div1_nodes, "BUTTON", {
				class: true,
				"data-bs-dismiss": true,
				type: true
			});

			var button_nodes = children(button);
			i = claim_element(button_nodes, "I", { class: true });
			children(i).forEach(detach);
			t14 = claim_text(button_nodes, "\n                Close Project");
			button_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img0.src !== (img0_src_value = "assets/img/close-icon.svg")) attr(img0, "src", img0_src_value);
			attr(img0, "alt", "Close modal");
			attr(div0, "class", "close-modal");
			attr(div0, "data-bs-dismiss", "modal");
			attr(h2, "class", "text-uppercase");
			attr(p0, "class", "item-intro text-muted");
			attr(img1, "class", "img-fluid d-block mx-auto");
			if (img1.src !== (img1_src_value = "assets/img/portfolio/mizuno.jpg")) attr(img1, "src", img1_src_value);
			attr(img1, "alt", "...");
			attr(ul, "class", "list-inline");
			attr(i, "class", "fas fa-times me-1");
			attr(button, "class", "btn btn-primary btn-xl text-uppercase");
			attr(button, "data-bs-dismiss", "modal");
			attr(button, "type", "button");
			attr(div1, "class", "modal-body");
			attr(div2, "class", "col-lg-8");
			attr(div3, "class", "row justify-content-center");
			attr(div4, "class", "container");
			attr(div5, "class", "modal-content");
			attr(div6, "class", "modal-dialog");
			attr(div7, "class", "portfolio-modal modal fade");
			attr(div7, "id", "portfolioModal2");
			attr(div7, "tabindex", "-1");
			attr(div7, "role", "dialog");
			attr(div7, "aria-hidden", "true");
		},
		m(target, anchor) {
			insert(target, div7, anchor);
			append(div7, div6);
			append(div6, div5);
			append(div5, div0);
			append(div0, img0);
			append(div5, t0);
			append(div5, div4);
			append(div4, div3);
			append(div3, div2);
			append(div2, div1);
			append(div1, h2);
			append(h2, t1);
			append(div1, t2);
			append(div1, p0);
			append(p0, t3);
			append(div1, t4);
			append(div1, img1);
			append(div1, t5);
			append(div1, p1);
			append(p1, t6);
			append(div1, t7);
			append(div1, ul);
			append(ul, li0);
			append(li0, strong0);
			append(strong0, t8);
			append(li0, t9);
			append(ul, t10);
			append(ul, li1);
			append(li1, strong1);
			append(strong1, t11);
			append(li1, t12);
			append(div1, t13);
			append(div1, button);
			append(button, i);
			append(button, t14);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div7);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;