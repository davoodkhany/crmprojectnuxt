import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "dashboard" | "default" | "sidebar"
declare module "C:/Users/Lenovo/Desktop/CRM/vuenuxi/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}