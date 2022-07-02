<script>
    import Cube from './Cube.svelte'
    const log = console.log.bind(console)
    let a = 1
    log(a)
    let backgroundColor = ''
    // let list = ['blue', 'green', 'purple', 'indigo', 'red', 'pink']
    // let i = 0
    // const start = () => {
    //     setInterval(() => {
    //         i += 1
    //         if (i % list.length === 0) {
    //             i = 0
    //         }
    //         backgroundColor = `bg-${list[i]}-600`
    //     }, 1000)
    // }
</script>

<main class="relative  h-screen p-2 bg-gradient-to-br from-green-200 to-blue-300">
    <div class="break-words font-extrabold text-center mt-28 ">
        <span class="block  text-9xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"> The </span>
        <span class="block text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"> Cube Test </span>
    </div>
    <Cube {backgroundColor} />

    <button class="shadow-lg mt-20 mx-auto  w-48 h-14  flex items-center py-4 px-8  bg-green-500 font-semibold rounded-lg focus:outline-none ">
        <span class=" text-white mr-2 whitespace-nowrap">Take the Test</span>
        <svg class="animate-translate" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
            ><rect width="48" height="48" fill="white" fill-opacity="0.01" /><path
                d="M41.9999 24H5.99992"
                stroke="#ffffff"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            /><path d="M30 12L42 24L30 36" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg
        >
    </button>
</main>

<style>
    svg {
        display: inline;
    }
</style>
