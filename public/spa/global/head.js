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
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let head;
	let meta0;
	let t0;
	let meta1;
	let t1;
	let title_1;
	let t2;
	let t3;
	let script;
	let script_src_value;
	let t4;
	let link0;
	let t5;
	let link1;
	let t6;
	let link2;
	let t7;
	let link3;
	let t8;
	let link4;
	let t9;
	let link5;
	let t10;
	let link6;

	return {
		c() {
			head = element("head");
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			title_1 = element("title");
			t2 = text(/*title*/ ctx[0]);
			t3 = space();
			script = element("script");
			t4 = space();
			link0 = element("link");
			t5 = space();
			link1 = element("link");
			t6 = space();
			link2 = element("link");
			t7 = space();
			link3 = element("link");
			t8 = space();
			link4 = element("link");
			t9 = space();
			link5 = element("link");
			t10 = space();
			link6 = element("link");
			this.h();
		},
		l(nodes) {
			head = claim_element(nodes, "HEAD", {});
			var head_nodes = children(head);
			meta0 = claim_element(head_nodes, "META", { charset: true });
			t0 = claim_space(head_nodes);
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			t1 = claim_space(head_nodes);
			title_1 = claim_element(head_nodes, "TITLE", {});
			var title_1_nodes = children(title_1);
			t2 = claim_text(title_1_nodes, /*title*/ ctx[0]);
			title_1_nodes.forEach(detach);
			t3 = claim_space(head_nodes);
			script = claim_element(head_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach);
			t4 = claim_space(head_nodes);
			link0 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			t5 = claim_space(head_nodes);
			link1 = claim_element(head_nodes, "LINK", { href: true, rel: true });
			t6 = claim_space(head_nodes);
			link2 = claim_element(head_nodes, "LINK", { href: true, rel: true, type: true });
			t7 = claim_space(head_nodes);
			link3 = claim_element(head_nodes, "LINK", { href: true, rel: true, type: true });
			t8 = claim_space(head_nodes);
			link4 = claim_element(head_nodes, "LINK", { href: true, rel: true });
			t9 = claim_space(head_nodes);
			link5 = claim_element(head_nodes, "LINK", { href: true, rel: true });
			t10 = claim_space(head_nodes);
			link6 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(meta0, "charset", "utf-8");
			attr(meta1, "name", "viewport");
			attr(meta1, "content", "width=device-width,initial-scale=1");
			attr(script, "type", "module");
			if (script.src !== (script_src_value = "/spa/ejected/main.js")) attr(script, "src", script_src_value);
			attr(link0, "rel", "icon");
			attr(link0, "type", "image/svg+xml");
			attr(link0, "href", "/assets/logo.svg");
			attr(link1, "href", "https://use.fontawesome.com/releases/v5.15.4/css/all.css");
			attr(link1, "rel", "stylesheet");
			attr(link2, "href", "https://fonts.googleapis.com/css?family=Montserrat:400,700");
			attr(link2, "rel", "stylesheet");
			attr(link2, "type", "text/css");
			attr(link3, "href", "https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700");
			attr(link3, "rel", "stylesheet");
			attr(link3, "type", "text/css");
			attr(link4, "href", "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap");
			attr(link4, "rel", "stylesheet");
			attr(link5, "href", "assets/css/styles.css");
			attr(link5, "rel", "stylesheet");
			attr(link6, "rel", "stylesheet");
			attr(link6, "href", "/spa/bundle.css");
		},
		m(target, anchor) {
			insert(target, head, anchor);
			append(head, meta0);
			append(head, t0);
			append(head, meta1);
			append(head, t1);
			append(head, title_1);
			append(title_1, t2);
			append(head, t3);
			append(head, script);
			append(head, t4);
			append(head, link0);
			append(head, t5);
			append(head, link1);
			append(head, t6);
			append(head, link2);
			append(head, t7);
			append(head, link3);
			append(head, t8);
			append(head, link4);
			append(head, t9);
			append(head, link5);
			append(head, t10);
			append(head, link6);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t2, /*title*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(head);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
	};

	return [title];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0 });
	}
}

export default Component;