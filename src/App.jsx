import React, { useCallback, useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Result from './component/result/Result'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";


export default function App() {
  // create use State 
  const [html_edit , setHtml_edit] = useState("")
  const [css_edit , setCss_edit] = useState("")
  const [js_edit , setJs_edit] = useState("")

  // html onchange Handler 
  const onChangeHtml = useCallback((value) => {
    setHtml_edit(value)
  }, [])

  // css onchange Handler 
  const onChangeCss = useCallback((value) => {
    setCss_edit(value)
    
  }, [])

  // js onchange Handler 
  const onChangeJs = useCallback((value) => {
    setJs_edit(value)
  }, [])

  // create html document 
  const srcCode = `
  <html>
  <body> ${html_edit} </body>
  <style> ${css_edit} </style>
  <script> ${js_edit} </script>
  </html>
  ` ;

  return (
    <div>
      <Navbar />
            {/* main content  */}
            <div className=" p-2">
        {/* Editor  */}
         {/* <div className=' font-size-[20px] ' > HTML</div> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
         {/* Html Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              HTML
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
              </h2>
          </div>
          {/* Css Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              CSS
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
              </h2>
          </div>
          {/* JavaScript Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              JAVASCRIPT 
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJs}
            />
            </h2>
          </div>
          </div>
<Result 
srcCode={srcCode}
/>
          </div>

    </div>
  )
}
