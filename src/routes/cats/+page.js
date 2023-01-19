export async function load({ fetch }) {
    // The Cat API( https://thecatapi.com/ ) を使用させて頂きます。使用方法などは公式を参照してください 🙆‍♂️
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    // `load()` の返り値は object である必要があります、 array などは返却できないのでご注意ください
    return { cats: await res.json() };
}
