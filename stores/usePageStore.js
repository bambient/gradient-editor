import create from "zustand";


const useSubmitStore = create(() => ({
    currentPage: null,
    wordCount: null,
    blocks: null
}));

export default useSubmitStore;