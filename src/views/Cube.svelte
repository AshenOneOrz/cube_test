<script>
    export let backgroundColor
</script>

<div class="container   mt-20 mx-auto">
    <div class="cube">
        <div class="front {backgroundColor}" />
        <div class="back {backgroundColor}" />
        <div class="right {backgroundColor}" />
        <div class="left {backgroundColor}" />
        <div class="top {backgroundColor}" />
        <div class="bottom {backgroundColor}" />
    </div>
</div>

<style>
    .container {
        height: 100px;
        width: 100px;
        perspective: 800px;
    }

    .cube {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        animation: rotate 8s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotateX(0) rotateY(0);
        }

        to {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    .cube div {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: background-color 1.2s linear;
        border: 1px solid #fff;
    }

    .front {
        transform: translateZ(50px);
    }

    .back {
        transform: translateZ(-50px);
    }

    .left {
        transform: rotateY(90deg) translateZ(50px);
    }

    .right {
        transform: rotateY(90deg) translateZ(-50px);
    }

    .top {
        transform: rotateX(90deg) translateZ(-50px);
    }

    .bottom {
        transform: rotateX(90deg) translateZ(50px);
    }
</style>
