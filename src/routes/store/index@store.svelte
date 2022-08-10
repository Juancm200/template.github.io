<script context="module">
  import { getDocs, collection, query } from "firebase/firestore";
  import {db} from "../firebase";
  
  export async function load() {
    const docRef = query(collection(db, "cities"));
    const querySnapshot = await getDocs(docRef);
    let cities = [];
    querySnapshot.docs.map((doc) => {
      return cities.push({ ...doc.data() });
    });
			
    return {
      props: {
        cities
      }
    }
  }
</script>

<script>
  export let cities;
  import Section from '$lib/components/layout/section.svelte';
  import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
</script>


<Section>
  <ThreeByThreeGrid>
    <ul>
      <li>
        {#each cities as city}
          <a href={`/cities/${city.id}`}>{city.name}</a>
        {/each}
      </li>
    </ul>
  </ThreeByThreeGrid>
</Section>