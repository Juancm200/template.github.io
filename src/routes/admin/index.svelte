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

	let products = [];

	const handleSubmit = async () => {
		await addDoc(collection(db, 'products'), product);
		console.log('added');
	};

	onSnapshot(collection(db, 'products'), 
	(querySnapshot) => {
		const products = querySnapshot.docs.map((doc) => {
			return{...doc.data()}
		});
		console.log(products);
	},
	(err) => {
		console.log(err);
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
</main>

<style></style>
