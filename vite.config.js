export default {
    root: "./",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: "./index.html",
                prompt: "./prompt.html",
            },
        },
    },
};