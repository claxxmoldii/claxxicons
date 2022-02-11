<script>
  import Navigation from '../components/navigation.svelte';
  import Masthead from '../components/masthead.svelte';
  import Services from '../components/services.svelte';
  import Portfoliogrid from '../components/portfoliogrid.svelte';
  import About from '../components/about.svelte';
  import Team from '../components/team.svelte';
  import Client from '../components/client.svelte';
  import Contact from '../components/contact.svelte';
  import Footer from '../components/footer.svelte';

  import Issues from '../components/issues.svelte';

  import Modalone from '../components/modals/modalone.svelte';
  import Modaltwo from '../components/modals/modaltwo.svelte';
  import Modalthree from '../components/modals/modalthree.svelte';
  import Modalfour from '../components/modals/modalfour.svelte';
  import Modalfive from '../components/modals/modalfive.svelte';
  import Modalsix from '../components/modals/modalsix.svelte';

	export let title;
</script>


<Navigation {title}/>
<Masthead />
<Services />
<Portfoliogrid />
<About />
<Team />
<Client />
<Contact />
<Footer />
<Issues />

<Modalone />
<Modaltwo />
<Modalthree />
<Modalfour />
<Modalfive />
<Modalsix />
