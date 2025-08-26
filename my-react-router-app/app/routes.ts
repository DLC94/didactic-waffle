import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('vm/:id', 'routes/vm/details.tsx'),
    route('function/:id', 'routes/fn/details.tsx'),
    route('vm/create','routes/vmcreate.tsx'),
    route('fn/create','routes/fncreate.tsx'),
    route('vm/main','routes/vmmain.tsx'),
    route('fn/main','routes/fnmain.tsx'),
    route('fn/code','routes/fncode.tsx'),
] satisfies RouteConfig;
