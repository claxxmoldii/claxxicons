/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div6;
	let div5;
	let div4;
	let div0;
	let a0;
	let img0;
	let img0_src_value;
	let t0;
	let div1;
	let a1;
	let img1;
	let img1_src_value;
	let t1;
	let div2;
	let a2;
	let img2;
	let img2_src_value;
	let t2;
	let div3;
	let a3;
	let img3;
	let img3_src_value;

	return {
		c() {
			div6 = element("div");
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			a0 = element("a");
			img0 = element("img");
			t0 = space();
			div1 = element("div");
			a1 = element("a");
			img1 = element("img");
			t1 = space();
			div2 = element("div");
			a2 = element("a");
			img2 = element("img");
			t2 = space();
			div3 = element("div");
			a3 = element("a");
			img3 = element("img");
			this.h();
		},
		l(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			img0 = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
			a0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t0 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a1 = claim_element(div1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			img1 = claim_element(a1_nodes, "IMG", { class: true, src: true, alt: true });
			a1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a2 = claim_element(div2_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			img2 = claim_element(a2_nodes, "IMG", { class: true, src: true, alt: true });
			a2_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t2 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a3 = claim_element(div3_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			img3 = claim_element(a3_nodes, "IMG", { class: true, src: true, alt: true });
			a3_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(img0, "class", "img-fluid img-brand d-block mx-auto");
			if (img0.src !== (img0_src_value = "assets/img/logos/microsoft.svg")) attr(img0, "src", img0_src_value);
			attr(img0, "alt", "...");
			attr(a0, "href", "#!");
			attr(div0, "class", "col-md-3 col-sm-6 my-3");
			attr(img1, "class", "img-fluid img-brand d-block mx-auto");
			if (img1.src !== (img1_src_value = "assets/img/logos/google.svg")) attr(img1, "src", img1_src_value);
			attr(img1, "alt", "...");
			attr(a1, "href", "#!");
			attr(div1, "class", "col-md-3 col-sm-6 my-3");
			attr(img2, "class", "img-fluid img-brand d-block mx-auto");
			if (img2.src !== (img2_src_value = "assets/img/logos/facebook.svg")) attr(img2, "src", img2_src_value);
			attr(img2, "alt", "...");
			attr(a2, "href", "#!");
			attr(div2, "class", "col-md-3 col-sm-6 my-3");
			attr(img3, "class", "img-fluid img-brand d-block mx-auto");
			if (img3.src !== (img3_src_value = "assets/img/logos/ibm.svg")) attr(img3, "src", img3_src_value);
			attr(img3, "alt", "...");
			attr(a3, "href", "#!");
			attr(div3, "class", "col-md-3 col-sm-6 my-3");
			attr(div4, "class", "row align-items-center");
			attr(div5, "class", "container");
			attr(div6, "class", "py-5");
		},
		m(target, anchor) {
			insert(target, div6, anchor);
			append(div6, div5);
			append(div5, div4);
			append(div4, div0);
			append(div0, a0);
			append(a0, img0);
			append(div4, t0);
			append(div4, div1);
			append(div1, a1);
			append(a1, img1);
			append(div4, t1);
			append(div4, div2);
			append(div2, a2);
			append(a2, img2);
			append(div4, t2);
			append(div4, div3);
			append(div3, a3);
			append(a3, img3);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div6);
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