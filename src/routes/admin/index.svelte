<script>
	import { addDoc, collection, doc, onSnapshot } from 'firebase/firestore';
	import { db } from '../firebase';

	let product = {
		id: '',
		title: '',
		price: '',
		description: '',
		createdDate: new Date()
	};
	// New product handler
	let products = [];
	const handleSubmit = async () => {
		await addDoc(collection(db, 'products'), product);
		console.log('added');
	};
	
	// Load all products when change occurs.
	onSnapshot(
		collection(db, 'products'),
		(querySnapshot) => {
			products = [];
			querySnapshot.docs.map((doc) => {
				return products.push({ ...doc.data() });
			});
		},
		(error) => {
			console.log(error);
		}
	);

</script>

<!--basic form to add a new product-->

<main>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="title">title</label>
		<input type="text" bind:value={product.title} id="title" />
		<label for="price">Price</label>
		<input type="text" bind:value={product.price} id="price" />
		<label for="description">Description</label>
		<textarea
			bind:value={product.description}
			name="description"
			id="description"
			cols="30"
			rows="10"
			placeholder="Salesey description"
		/>
		<input type="submit" value="Add Product" />
	</form>
	
<!--Show current state of "Products" collection-->

	<div class="prduct">
		<ul>
			{#each products as product}
				<li>
					<h3>{product.title}</h3>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style></style>
