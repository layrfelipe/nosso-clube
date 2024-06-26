import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Login from '@/components/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nosso Clube</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <img src="/logo-vertical.png"/>
        <p>Olá, torcedor! Seja bem-vindo ao nosso clube de benefícios.<br />Entre com seu CPF e veja os drops que estão disponíveis para você.</p>
        <Login />
      </main>
    </>
  )
}
