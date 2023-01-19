<script>
    // propsとして外部から差し込む値は、Svelteでは `export let` します
    export let data;
    // 後で `cats` は上書きしたいので、 `let` な変数として取り出しておきます
    let { cats } = data.cats;
    const fetchCats = async () => {
        const res = await fetch(
            "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        cats = [...(await res.json())];
    };
    const onClickRefreshCats = () => {
        fetchCats();
    };
</script>

<h1>Random cats</h1>
<button on:click={onClickRefreshCats}> Refresh cats </button>
<div class="cats-container">
    <!-- `cats` をループさせます -->
    {#each cats as cat (cat.id)}
        <img
            src={cat.url}
            alt="Cat image of {cat.id}"
            width="300"
            height="300"
            class="cat-image"
        />
    {/each}
</div>

<style>
    .cats-container {
        /* Grid layoutを使っています。とっても便利なので、もしフロントエンドを作る際はご活用ください！ */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.2rem;
        max-width: calc(900px + 0.4rem);
    }
    .cat-image {
        /* object-fit は面白いですし、便利な property です。是非他にどんな指定ができるのか試してみてください。 */
        object-fit: cover;
    }
</style>
