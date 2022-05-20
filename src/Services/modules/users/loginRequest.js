import { Config } from "@/Config";

export default build =>
  build.mutation({
    query: ({phone,password,countryCode})=>({
        body:{
             phone,
             password,
             countryCode
        },
        method:"POST",
        url:`${Config.LOGIN_REQUEST}`
    }),
  })
