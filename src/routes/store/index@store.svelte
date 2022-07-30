<script context="module">
  import { doc, getDoc } from "firebase/firestore";
  import {db} from "../firebase";
  export async function load({fetch}) {

    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }
</script>

<script>
  import Section from '$lib/components/layout/section.svelte';
  import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
</script>


<Section>
  <ThreeByThreeGrid>
    <ul>

    </ul>
  </ThreeByThreeGrid>
</Section>