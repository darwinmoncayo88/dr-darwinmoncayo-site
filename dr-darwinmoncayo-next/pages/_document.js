import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class MyDocument extends Document { render(){ return (<Html lang="es"><Head><meta name="theme-color" content="#0b0b0d"/><link rel="icon" href="/images/favicon.ico"/></Head><body><Main/><NextScript/></body></Html>) }}
