<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="app">
    <header>
        <nav>
            <ul>
                <!-- ここで設定している `aria-current` とはなんでしょう？是非調べてみてください！ -->
                <li
                    class="nav-item"
                    aria-current={$page.url.pathname === "/"
                        ? "page"
                        : undefined}
                >
                    <a href="/">Home</a>
                </li>
                <li
                    class="nav-item"
                    aria-current={$page.url.pathname === "/cats"
                        ? "page"
                        : undefined}
                >
                    <a href="/cats">Cats</a>
                </li>
                <li
                    class="nav-item"
                    aria-current={$page.url.pathname === "/dogs"
                        ? "page"
                        : undefined}
                >
                    <a href="/dogs">Dogs</a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer>SvelteKit hands-on de tsukurimashita &copy;</footer>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    header {
        display: flex;
        /* background-color: #676778; */
        background-color: #47536e;
    }

    nav {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    .nav-item {
        position: relative;
        height: 100%;
        padding: 0 3rem;
    }

    .nav-item[aria-current="page"]::before {
        --size: 6px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid #f892a4;
    }

    .nav-item a {
        color: white;
        opacity: 0.7;
        transition: opacity 0.8s;

        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        /* transition: color 0.2s linear; */
    }

    .nav-item a:hover {
        opacity: 1;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        background-color: #47536e;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }
</style>
