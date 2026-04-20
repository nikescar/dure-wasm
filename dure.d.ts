/* tslint:disable */
/* eslint-disable */

/**
 * Install the OPFS Synchronous Access Handle Pool VFS for persistent storage.
 */
export function installOpfsSahpool(): Promise<void>;

/**
 * Install the Relaxed IndexedDB VFS for persistent storage.
 */
export function installRelaxedIdb(): Promise<void>;

/**
 * Switch the active VFS: 0 = Memory, 1 = OPFS SAH Pool, 2 = Relaxed IndexedDB.
 */
export function switchVfs(id: number): void;

/**
 * WASM entry point — called automatically by the browser via wasm-bindgen.
 */
export function wasm_start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly installOpfsSahpool: () => any;
    readonly installRelaxedIdb: () => any;
    readonly switchVfs: (a: number) => void;
    readonly wasm_start: () => void;
    readonly rust_sqlite_wasm_abort: () => void;
    readonly rust_sqlite_wasm_assert_fail: (a: number, b: number, c: number, d: number) => void;
    readonly rust_sqlite_wasm_calloc: (a: number, b: number) => number;
    readonly rust_sqlite_wasm_malloc: (a: number) => number;
    readonly rust_sqlite_wasm_free: (a: number) => void;
    readonly rust_sqlite_wasm_getentropy: (a: number, b: number) => number;
    readonly rust_sqlite_wasm_localtime: (a: number) => number;
    readonly rust_sqlite_wasm_realloc: (a: number, b: number) => number;
    readonly sqlite3_os_end: () => number;
    readonly sqlite3_os_init: () => number;
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___wasm_bindgen_917caac36d0c3e37___JsValue__core_891b0a397fa42c18___result__Result_____wasm_bindgen_917caac36d0c3e37___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___web_sys_e7424494beb80082___features__gen_IdbVersionChangeEvent__IdbVersionChangeEvent__core_891b0a397fa42c18___result__Result_____wasm_bindgen_917caac36d0c3e37___JsValue___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___js_sys_bfaf020c9b92ca83___Function_fn_wasm_bindgen_917caac36d0c3e37___JsValue_____wasm_bindgen_917caac36d0c3e37___sys__Undefined___js_sys_bfaf020c9b92ca83___Function_fn_wasm_bindgen_917caac36d0c3e37___JsValue_____wasm_bindgen_917caac36d0c3e37___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___js_sys_bfaf020c9b92ca83___Array______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___web_sys_e7424494beb80082___features__gen_Event__Event______true__1_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___web_sys_e7424494beb80082___features__gen_Event__Event______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___core_891b0a397fa42c18___result__Result_____wasm_bindgen_917caac36d0c3e37___JsValue___true_: (a: number, b: number) => [number, number];
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke___bool__true_: (a: number, b: number) => number;
    readonly wasm_bindgen_917caac36d0c3e37___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
