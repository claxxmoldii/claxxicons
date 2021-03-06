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
	listen,
	noop,
	run_all,
	safe_not_equal,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

import { createEventDispatcher } from '../web_modules/svelte/index.mjs';

function create_fragment(ctx) {
	let section;
	let div44;
	let div0;
	let h2;
	let t0;
	let t1;
	let h3;
	let t2;
	let t3;
	let div43;
	let div7;
	let div6;
	let a0;
	let div2;
	let div1;
	let i0;
	let t4;
	let img0;
	let img0_src_value;
	let t5;
	let div5;
	let div3;
	let t6;
	let t7;
	let div4;
	let t8;
	let t9;
	let div14;
	let div13;
	let a1;
	let div9;
	let div8;
	let i1;
	let t10;
	let img1;
	let img1_src_value;
	let t11;
	let div12;
	let div10;
	let t12;
	let t13;
	let div11;
	let t14;
	let t15;
	let div21;
	let div20;
	let a2;
	let div16;
	let div15;
	let i2;
	let t16;
	let img2;
	let img2_src_value;
	let t17;
	let div19;
	let div17;
	let t18;
	let t19;
	let div18;
	let t20;
	let t21;
	let div28;
	let div27;
	let a3;
	let div23;
	let div22;
	let i3;
	let t22;
	let img3;
	let img3_src_value;
	let t23;
	let div26;
	let div24;
	let t24;
	let t25;
	let div25;
	let t26;
	let t27;
	let div35;
	let div34;
	let a4;
	let div30;
	let div29;
	let i4;
	let t28;
	let img4;
	let img4_src_value;
	let t29;
	let div33;
	let div31;
	let t30;
	let t31;
	let div32;
	let t32;
	let t33;
	let div42;
	let div41;
	let a5;
	let div37;
	let div36;
	let i5;
	let t34;
	let img5;
	let img5_src_value;
	let t35;
	let div40;
	let div38;
	let t36;
	let t37;
	let div39;
	let t38;
	let mounted;
	let dispose;

	return {
		c() {
			section = element("section");
			div44 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Portfolio");
			t1 = space();
			h3 = element("h3");
			t2 = text("Lorem ipsum dolor sit amet consectetur.");
			t3 = space();
			div43 = element("div");
			div7 = element("div");
			div6 = element("div");
			a0 = element("a");
			div2 = element("div");
			div1 = element("div");
			i0 = element("i");
			t4 = space();
			img0 = element("img");
			t5 = space();
			div5 = element("div");
			div3 = element("div");
			t6 = text("Play Station 4");
			t7 = space();
			div4 = element("div");
			t8 = text("Illustration");
			t9 = space();
			div14 = element("div");
			div13 = element("div");
			a1 = element("a");
			div9 = element("div");
			div8 = element("div");
			i1 = element("i");
			t10 = space();
			img1 = element("img");
			t11 = space();
			div12 = element("div");
			div10 = element("div");
			t12 = text("Mizuno");
			t13 = space();
			div11 = element("div");
			t14 = text("Graphic Design");
			t15 = space();
			div21 = element("div");
			div20 = element("div");
			a2 = element("a");
			div16 = element("div");
			div15 = element("div");
			i2 = element("i");
			t16 = space();
			img2 = element("img");
			t17 = space();
			div19 = element("div");
			div17 = element("div");
			t18 = text("UCC");
			t19 = space();
			div18 = element("div");
			t20 = text("Identity");
			t21 = space();
			div28 = element("div");
			div27 = element("div");
			a3 = element("a");
			div23 = element("div");
			div22 = element("div");
			i3 = element("i");
			t22 = space();
			img3 = element("img");
			t23 = space();
			div26 = element("div");
			div24 = element("div");
			t24 = text("Pocari Sweat");
			t25 = space();
			div25 = element("div");
			t26 = text("Branding");
			t27 = space();
			div35 = element("div");
			div34 = element("div");
			a4 = element("a");
			div30 = element("div");
			div29 = element("div");
			i4 = element("i");
			t28 = space();
			img4 = element("img");
			t29 = space();
			div33 = element("div");
			div31 = element("div");
			t30 = text("Epson");
			t31 = space();
			div32 = element("div");
			t32 = text("Website Design");
			t33 = space();
			div42 = element("div");
			div41 = element("div");
			a5 = element("a");
			div37 = element("div");
			div36 = element("div");
			i5 = element("i");
			t34 = space();
			img5 = element("img");
			t35 = space();
			div40 = element("div");
			div38 = element("div");
			t36 = text("Casio");
			t37 = space();
			div39 = element("div");
			t38 = text("Photography");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true, id: true });
			var section_nodes = children(section);
			div44 = claim_element(section_nodes, "DIV", { class: true });
			var div44_nodes = children(div44);
			div0 = claim_element(div44_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Portfolio");
			h2_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, "Lorem ipsum dolor sit amet consectetur.");
			h3_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t3 = claim_space(div44_nodes);
			div43 = claim_element(div44_nodes, "DIV", { class: true });
			var div43_nodes = children(div43);
			div7 = claim_element(div43_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);

			a0 = claim_element(div6_nodes, "A", {
				class: true,
				"data-bs-toggle": true,
				href: true
			});

			var a0_nodes = children(a0);
			div2 = claim_element(a0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			i0 = claim_element(div1_nodes, "I", { class: true });
			children(i0).forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t4 = claim_space(a0_nodes);
			img0 = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
			a0_nodes.forEach(detach);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			t6 = claim_text(div3_nodes, "Play Station 4");
			div3_nodes.forEach(detach);
			t7 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t8 = claim_text(div4_nodes, "Illustration");
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			t9 = claim_space(div43_nodes);
			div14 = claim_element(div43_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);

			a1 = claim_element(div13_nodes, "A", {
				class: true,
				"data-bs-toggle": true,
				href: true
			});

			var a1_nodes = children(a1);
			div9 = claim_element(a1_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			i1 = claim_element(div8_nodes, "I", { class: true });
			children(i1).forEach(detach);
			div8_nodes.forEach(detach);
			div9_nodes.forEach(detach);
			t10 = claim_space(a1_nodes);
			img1 = claim_element(a1_nodes, "IMG", { class: true, src: true, alt: true });
			a1_nodes.forEach(detach);
			t11 = claim_space(div13_nodes);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div10 = claim_element(div12_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			t12 = claim_text(div10_nodes, "Mizuno");
			div10_nodes.forEach(detach);
			t13 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			t14 = claim_text(div11_nodes, "Graphic Design");
			div11_nodes.forEach(detach);
			div12_nodes.forEach(detach);
			div13_nodes.forEach(detach);
			div14_nodes.forEach(detach);
			t15 = claim_space(div43_nodes);
			div21 = claim_element(div43_nodes, "DIV", { class: true });
			var div21_nodes = children(div21);
			div20 = claim_element(div21_nodes, "DIV", { class: true });
			var div20_nodes = children(div20);

			a2 = claim_element(div20_nodes, "A", {
				class: true,
				"data-bs-toggle": true,
				href: true
			});

			var a2_nodes = children(a2);
			div16 = claim_element(a2_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div15 = claim_element(div16_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			i2 = claim_element(div15_nodes, "I", { class: true });
			children(i2).forEach(detach);
			div15_nodes.forEach(detach);
			div16_nodes.forEach(detach);
			t16 = claim_space(a2_nodes);
			img2 = claim_element(a2_nodes, "IMG", { class: true, src: true, alt: true });
			a2_nodes.forEach(detach);
			t17 = claim_space(div20_nodes);
			div19 = claim_element(div20_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div17 = claim_element(div19_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			t18 = claim_text(div17_nodes, "UCC");
			div17_nodes.forEach(detach);
			t19 = claim_space(div19_nodes);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			t20 = claim_text(div18_nodes, "Identity");
			div18_nodes.forEach(detach);
			div19_nodes.forEach(detach);
			div20_nodes.forEach(detach);
			div21_nodes.forEach(detach);
			t21 = claim_space(div43_nodes);
			div28 = claim_element(div43_nodes, "DIV", { class: true });
			var div28_nodes = children(div28);
			div27 = claim_element(div28_nodes, "DIV", { class: true });
			var div27_nodes = children(div27);

			a3 = claim_element(div27_nodes, "A", {
				class: true,
				"data-bs-toggle": true,
				href: true
			});

			var a3_nodes = children(a3);
			div23 = claim_element(a3_nodes, "DIV", { class: true });
			var div23_nodes = children(div23);
			div22 = claim_element(div23_nodes, "DIV", { class: true });
			var div22_nodes = children(div22);
			i3 = claim_element(div22_nodes, "I", { class: true });
			children(i3).forEach(detach);
			div22_nodes.forEach(detach);
			div23_nodes.forEach(detach);
			t22 = claim_space(a3_nodes);
			img3 = claim_element(a3_nodes, "IMG", { class: true, src: true, alt: true });
			a3_nodes.forEach(detach);
			t23 = claim_space(div27_nodes);
			div26 = claim_element(div27_nodes, "DIV", { class: true });
			var div26_nodes = children(div26);
			div24 = claim_element(div26_nodes, "DIV", { class: true });
			var div24_nodes = children(div24);
			t24 = claim_text(div24_nodes, "Pocari Sweat");
			div24_nodes.forEach(detach);
			t25 = claim_space(div26_nodes);
			div25 = claim_element(div26_nodes, "DIV", { class: true });
			var div25_nodes = children(div25);
			t26 = claim_text(div25_nodes, "Branding");
			div25_nodes.forEach(detach);
			div26_nodes.forEach(detach);
			div27_nodes.forEach(detach);
			div28_nodes.forEach(detach);
			t27 = claim_space(div43_nodes);
			div35 = claim_element(div43_nodes, "DIV", { class: true });
			var div35_nodes = children(div35);
			div34 = claim_element(div35_nodes, "DIV", { class: true });
			var div34_nodes = children(div34);

			a4 = claim_element(div34_nodes, "A", {
				class: true,
				"data-bs-toggle": true,
				href: true
			});

			var a4_nodes = children(a4);
			div30 = claim_element(a4_nodes, "DIV", { class: true });
			var div30_nodes = children(div30);
			div29 = claim_element(div30_nodes, "DIV", { class: true });
			var div29_nodes = children(div29);
			i4 = claim_element(div29_nodes, "I", { class: true });
			children(i4).forEach(detach);
			div29_nodes.forEach(detach);
			div30_nodes.forEach(detach);
			t28 = claim_space(a4_nodes);
			img4 = claim_element(a4_nodes, "IMG", { class: true, src: true, alt: true });
			a4_nodes.forEach(detach);
			t29 = claim_space(div34_nodes);
			div33 = claim_element(div34_nodes, "DIV", { class: true });
			var div33_nodes = children(div33);
			div31 = claim_element(div33_nodes, "DIV", { class: true });
			var div31_nodes = children(div31);
			t30 = claim_text(div31_nodes, "Epson");
			div31_nodes.forEach(detach);
			t31 = claim_space(div33_nodes);
			div32 = claim_element(div33_nodes, "DIV", { class: true });
			var div32_nodes = children(div32);
			t32 = claim_text(div32_nodes, "Website Design");
			div32_nodes.forEach(detach);
			div33_nodes.forEach(detach);
			div34_nodes.forEach(detach);
			div35_nodes.forEach(detach);
			t33 = claim_space(div43_nodes);
			div42 = claim_element(div43_nodes, "DIV", { class: true });
			var div42_nodes = children(div42);
			div41 = claim_element(div42_nodes, "DIV", { class: true });
			var div41_nodes = children(div41);

			a5 = claim_element(div41_nodes, "A", {
				class: true,
				"data-bs-toggle": true,
				href: true
			});

			var a5_nodes = children(a5);
			div37 = claim_element(a5_nodes, "DIV", { class: true });
			var div37_nodes = children(div37);
			div36 = claim_element(div37_nodes, "DIV", { class: true });
			var div36_nodes = children(div36);
			i5 = claim_element(div36_nodes, "I", { class: true });
			children(i5).forEach(detach);
			div36_nodes.forEach(detach);
			div37_nodes.forEach(detach);
			t34 = claim_space(a5_nodes);
			img5 = claim_element(a5_nodes, "IMG", { class: true, src: true, alt: true });
			a5_nodes.forEach(detach);
			t35 = claim_space(div41_nodes);
			div40 = claim_element(div41_nodes, "DIV", { class: true });
			var div40_nodes = children(div40);
			div38 = claim_element(div40_nodes, "DIV", { class: true });
			var div38_nodes = children(div38);
			t36 = claim_text(div38_nodes, "Casio");
			div38_nodes.forEach(detach);
			t37 = claim_space(div40_nodes);
			div39 = claim_element(div40_nodes, "DIV", { class: true });
			var div39_nodes = children(div39);
			t38 = claim_text(div39_nodes, "Photography");
			div39_nodes.forEach(detach);
			div40_nodes.forEach(detach);
			div41_nodes.forEach(detach);
			div42_nodes.forEach(detach);
			div43_nodes.forEach(detach);
			div44_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h2, "class", "section-heading text-uppercase");
			attr(h3, "class", "section-subheading text-muted");
			attr(div0, "class", "text-center");
			attr(i0, "class", "fas fa-plus fa-3x");
			attr(div1, "class", "portfolio-hover-content");
			attr(div2, "class", "portfolio-hover");
			attr(img0, "class", "img-fluid");
			if (img0.src !== (img0_src_value = "assets/img/portfolio/ps4.jpg")) attr(img0, "src", img0_src_value);
			attr(img0, "alt", "...");
			attr(a0, "class", "portfolio-link");
			attr(a0, "data-bs-toggle", "modal");
			attr(a0, "href", "#portfolioModal1");
			attr(div3, "class", "portfolio-caption-heading");
			attr(div4, "class", "portfolio-caption-subheading text-muted");
			attr(div5, "class", "portfolio-caption");
			attr(div6, "class", "portfolio-item");
			attr(div7, "class", "col-lg-4 col-sm-6 mb-4");
			attr(i1, "class", "fas fa-plus fa-3x");
			attr(div8, "class", "portfolio-hover-content");
			attr(div9, "class", "portfolio-hover");
			attr(img1, "class", "img-fluid");
			if (img1.src !== (img1_src_value = "assets/img/portfolio/mizuno.jpg")) attr(img1, "src", img1_src_value);
			attr(img1, "alt", "...");
			attr(a1, "class", "portfolio-link");
			attr(a1, "data-bs-toggle", "modal");
			attr(a1, "href", "#portfolioModal2");
			attr(div10, "class", "portfolio-caption-heading");
			attr(div11, "class", "portfolio-caption-subheading text-muted");
			attr(div12, "class", "portfolio-caption");
			attr(div13, "class", "portfolio-item");
			attr(div14, "class", "col-lg-4 col-sm-6 mb-4");
			attr(i2, "class", "fas fa-plus fa-3x");
			attr(div15, "class", "portfolio-hover-content");
			attr(div16, "class", "portfolio-hover");
			attr(img2, "class", "img-fluid");
			if (img2.src !== (img2_src_value = "assets/img/portfolio/ucc.jpg")) attr(img2, "src", img2_src_value);
			attr(img2, "alt", "...");
			attr(a2, "class", "portfolio-link");
			attr(a2, "data-bs-toggle", "modal");
			attr(a2, "href", "#portfolioModal3");
			attr(div17, "class", "portfolio-caption-heading");
			attr(div18, "class", "portfolio-caption-subheading text-muted");
			attr(div19, "class", "portfolio-caption");
			attr(div20, "class", "portfolio-item");
			attr(div21, "class", "col-lg-4 col-sm-6 mb-4");
			attr(i3, "class", "fas fa-plus fa-3x");
			attr(div22, "class", "portfolio-hover-content");
			attr(div23, "class", "portfolio-hover");
			attr(img3, "class", "img-fluid");
			if (img3.src !== (img3_src_value = "assets/img/portfolio/pocari.jpg")) attr(img3, "src", img3_src_value);
			attr(img3, "alt", "...");
			attr(a3, "class", "portfolio-link");
			attr(a3, "data-bs-toggle", "modal");
			attr(a3, "href", "#portfolioModal4");
			attr(div24, "class", "portfolio-caption-heading");
			attr(div25, "class", "portfolio-caption-subheading text-muted");
			attr(div26, "class", "portfolio-caption");
			attr(div27, "class", "portfolio-item");
			attr(div28, "class", "col-lg-4 col-sm-6 mb-4 mb-lg-0");
			attr(i4, "class", "fas fa-plus fa-3x");
			attr(div29, "class", "portfolio-hover-content");
			attr(div30, "class", "portfolio-hover");
			attr(img4, "class", "img-fluid");
			if (img4.src !== (img4_src_value = "assets/img/portfolio/epson.jpg")) attr(img4, "src", img4_src_value);
			attr(img4, "alt", "...");
			attr(a4, "class", "portfolio-link");
			attr(a4, "data-bs-toggle", "modal");
			attr(a4, "href", "#portfolioModal5");
			attr(div31, "class", "portfolio-caption-heading");
			attr(div32, "class", "portfolio-caption-subheading text-muted");
			attr(div33, "class", "portfolio-caption");
			attr(div34, "class", "portfolio-item");
			attr(div35, "class", "col-lg-4 col-sm-6 mb-4 mb-sm-0");
			attr(i5, "class", "fas fa-plus fa-3x");
			attr(div36, "class", "portfolio-hover-content");
			attr(div37, "class", "portfolio-hover");
			attr(img5, "class", "img-fluid");
			if (img5.src !== (img5_src_value = "assets/img/portfolio/casio.jpg")) attr(img5, "src", img5_src_value);
			attr(img5, "alt", "...");
			attr(a5, "class", "portfolio-link");
			attr(a5, "data-bs-toggle", "modal");
			attr(a5, "href", "#portfolioModal6");
			attr(div38, "class", "portfolio-caption-heading");
			attr(div39, "class", "portfolio-caption-subheading text-muted");
			attr(div40, "class", "portfolio-caption");
			attr(div41, "class", "portfolio-item");
			attr(div42, "class", "col-lg-4 col-sm-6");
			attr(div43, "class", "row");
			attr(div44, "class", "container");
			attr(section, "class", "page-section bg-light");
			attr(section, "id", "portfolio");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div44);
			append(div44, div0);
			append(div0, h2);
			append(h2, t0);
			append(div0, t1);
			append(div0, h3);
			append(h3, t2);
			append(div44, t3);
			append(div44, div43);
			append(div43, div7);
			append(div7, div6);
			append(div6, a0);
			append(a0, div2);
			append(div2, div1);
			append(div1, i0);
			append(a0, t4);
			append(a0, img0);
			append(div6, t5);
			append(div6, div5);
			append(div5, div3);
			append(div3, t6);
			append(div5, t7);
			append(div5, div4);
			append(div4, t8);
			append(div43, t9);
			append(div43, div14);
			append(div14, div13);
			append(div13, a1);
			append(a1, div9);
			append(div9, div8);
			append(div8, i1);
			append(a1, t10);
			append(a1, img1);
			append(div13, t11);
			append(div13, div12);
			append(div12, div10);
			append(div10, t12);
			append(div12, t13);
			append(div12, div11);
			append(div11, t14);
			append(div43, t15);
			append(div43, div21);
			append(div21, div20);
			append(div20, a2);
			append(a2, div16);
			append(div16, div15);
			append(div15, i2);
			append(a2, t16);
			append(a2, img2);
			append(div20, t17);
			append(div20, div19);
			append(div19, div17);
			append(div17, t18);
			append(div19, t19);
			append(div19, div18);
			append(div18, t20);
			append(div43, t21);
			append(div43, div28);
			append(div28, div27);
			append(div27, a3);
			append(a3, div23);
			append(div23, div22);
			append(div22, i3);
			append(a3, t22);
			append(a3, img3);
			append(div27, t23);
			append(div27, div26);
			append(div26, div24);
			append(div24, t24);
			append(div26, t25);
			append(div26, div25);
			append(div25, t26);
			append(div43, t27);
			append(div43, div35);
			append(div35, div34);
			append(div34, a4);
			append(a4, div30);
			append(div30, div29);
			append(div29, i4);
			append(a4, t28);
			append(a4, img4);
			append(div34, t29);
			append(div34, div33);
			append(div33, div31);
			append(div31, t30);
			append(div33, t31);
			append(div33, div32);
			append(div32, t32);
			append(div43, t33);
			append(div43, div42);
			append(div42, div41);
			append(div41, a5);
			append(a5, div37);
			append(div37, div36);
			append(div36, i5);
			append(a5, t34);
			append(a5, img5);
			append(div41, t35);
			append(div41, div40);
			append(div40, div38);
			append(div38, t36);
			append(div40, t37);
			append(div40, div39);
			append(div39, t38);

			if (!mounted) {
				dispose = [
					listen(a0, "click", /*sayHello*/ ctx[0]),
					listen(a1, "click", /*sayHello*/ ctx[0])
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self) {
	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch("message", { text: "Hello!" });
	}

	return [sayHello];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;