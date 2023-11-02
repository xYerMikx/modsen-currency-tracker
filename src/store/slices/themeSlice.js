import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  theme: "dark",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }),
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
