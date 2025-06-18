"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaPaw
} from "react-icons/fa";

export default function Home() {
  const router = useRouter(); // ✅ 用於導航到獨立頁面
  
  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 關於我們
        </h2>
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            宏愛動物醫院秉持「人性化、現代化、專業化」的理念，以專業的手與誠摯的心，守護每一位毛孩的健康。作為犬貓專科醫院，我們致力於提供最優質、最全面的醫療照護，讓飼主與寵物都能感受到信賴與安心。
            <br /><br />
            本院由前軍犬中心獸醫師領軍，專精於犬貓泌尿道疾病、骨盆與脊椎手術，涵蓋內科、外科、眼科、牙科、皮膚科等多項領域，亦擅長呼吸道治療與心肺復甦術。特別設有犬病毒性腸炎、心絲蟲與血液寄生蟲等專科診療，提供精準且高效率的治療方案。
            <br /><br />
            院內設有24小時夜間急診與住院服務，並附設寵物美容部、旅館部及百貨用品區，滿足毛孩日常生活與健康需求。同時，宏愛亦為政府指定之寵物識別晶片植入醫院，確保您的毛孩擁有完善的身份識別與安全保障。
            <br /><br />
            我們深信，醫療服務不僅是治療，更是一段陪伴與理解的旅程。宏愛團隊珍視與飼主的溝通，將每一次看診視為守護生命的承諾，期盼與您攜手共築毛孩幸福的每一天。
          </p>
        </div>


        {/* 🔹 我們的優勢 */}
        <div className="bg-white shadow-xl rounded-xl p-8 mt-12">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
            <FaPaw className="text-yellow-500" /> 我們的優勢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {[
              { title: "專業犬貓泌尿與脊椎外科", description: "由前軍犬中心獸醫師親自診治，專精泌尿系統與骨盆脊椎手術，臨床經驗豐富。" },
              { title: "24 小時急診與住院", description: "全年無休急診與夜間住院照護，讓您的毛孩隨時都有人守護。" },
              { title: "一站式寵物服務", description: "集醫療、美容、旅館與百貨於一體，便利飼主照護毛孩的全方位需求。" },
              { title: "諾亞高壓氧保養", description: "透過高壓氧艙提升細胞含氧量，加速術後癒合、改善炎症與慢性疼痛。" }
            ].map((advantage, index) => (
              <div key={index} className="bg-[#F5F1ED] shadow-md rounded-xl p-6 text-lg text-center">
                <h3 className="text-xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
                  <FaPaw className="text-yellow-500" /> {advantage.title}
                </h3>
                <p className="mt-2 text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 院長資訊 */}
      <section id="director" className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/5">
          <Image
            src="/director.jpg"
            alt="院長"
            width={400}
            height={400}
            className="rounded-xl border-4 border-yellow-500 shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-4xl font-bold text-[#5A4032] flex items-center gap-2">
            <FaPaw className="text-yellow-500" /> 院長資訊
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            院長祝偉鈞醫師畢業於國立嘉義大學獸醫學院，擁有多年小動物臨床經驗，從基礎內外科到進階專科診療，皆有深厚實力。職涯歷練橫跨北中知名院所，曾任台北市和欣動物醫院、劍橋動物醫院、台中市東南動物醫院主治獸醫，亦擔任馬汀體系威爾斯分院院長，具備豐富的實務與醫療團隊管理經驗。
            <br /><br />
            祝院長專長涵蓋犬貓內外科診療、心臟內科、腫瘤科、牙科治療、預防醫學健檢，以及母浪貓側腹微創絕育手術等，尤注重醫療的精準性與人道關懷。他始終堅信：「醫療不是單向的指導，而是與飼主攜手做出的每一個選擇。」因此在診療過程中，總是以同理與耐心聆聽每一位飼主的聲音。
            <br /><br />
            院長創立鈞懋動物醫院，正是為了實踐他對理想醫療環境的願景——一個兼具專業、信任與溫度的診療空間，讓每位毛孩在就醫的同時，也能感受到被溫柔對待的尊重與安心。
          </p>
        </div>
      </section>

      {/* 🔹 主治項目 */}
      <section id="services" className="max-w-6xl mx-auto py-16 px-6 text-center bg-[#9D8575] text-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 主治項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
          {[
            {
              label: "寵物醫療",
              treatments: ["提供內科、外科、眼科、牙科、皮膚科等全方位診療服務，守護毛孩健康。"],
            },
            {
              label: "寵物保健",
              treatments: ["從疫苗、驅蟲、健康檢查到慢性病追蹤，打造全面的健康管理計畫。"],
            },
            {
              label: "寵物美容",
              treatments: ["提供洗澡、剪毛、專業造型等美容服務，讓毛孩清爽又舒適。"],
            },
            {
              label: "寵物百貨",
              treatments: ["精選寵物日常用品與營養食品，滿足毛孩生活所需。"],
            }
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaPaw className="text-yellow-500" /> {service.label}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base text-gray-700 mt-4">
                {service.treatments.map((treatment, i) => (
                  <li key={i}>{treatment}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* 🔹 諾亞寵物高壓氧 - 可點擊導向 `/oxygen` */}
          <div
            onClick={() => router.push("/oxygen")}
            className="flex items-center gap-2 bg-[#E6D6CC] text-gray-800 rounded-xl shadow-md p-6 cursor-pointer hover:bg-[#d5c3b8] transition"
          >
            <FaPaw className="text-yellow-500 text-2xl" />
            <div>
              <h3 className="text-xl font-bold text-[#5A4032]">諾亞寵物高壓氧</h3>
              <p className="text-base mt-1 text-gray-700">
                點擊了解高壓氧療法如何提升毛孩康復與健康。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 聯絡方式 */}
      <section id="contact" className="max-w-6xl mx-auto py-16 px-6 text-center bg-white shadow-xl rounded-xl">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 聯絡方式
        </h2>

        {/* 🔹 聯絡資訊 + 門診 & 探視時間 */}
        <div className="bg-[#E6D6CC] shadow-lg rounded-xl p-8 mt-6">
          {/* 地址 & 聯絡資訊 */}
          <div className="text-lg flex flex-col items-center gap-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              地址：701台南市東區東寧路331號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：06-2385816
            </p>
            <p className="flex items-center gap-1 whitespace-nowrap">
              <span>LINE線上諮詢：</span>
              <a
                href="https://line.me/R/ti/p/@kkp1060t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 transition"
              >
                @kkp1060t
              </a>
            </p>
          </div>

          {/* 門診時間 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-1 text-lg text-gray-800">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-4">門診時間</h3>
              <ul className="leading-relaxed space-y-1">
                <li>星期一：10:30 – 20:00</li>
                <li>星期二：10:30 – 20:00</li>
                <li>星期三：10:30 – 20:00</li>
                <li>星期四：10:30 – 20:00</li>
                <li>星期五：10:30 – 20:00</li>
                <li>星期六：10:30 – 20:00</li>
                <li className="text-red-700 font-bold">星期日：休息</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 宏愛動物醫院"
            className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.91216180514!2d120.2278546!3d22.9902573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77f00a3c3c5d%3A0x9374c24e03593dff!2z5a6P5oSb5YuV54mp6Yar6ZmiLeeKrOiyk-WwiOenkemGq-eZguOAgeeKrOiyk-e-juWuueOAgeeKrOiyk-iXpeWxgO-8iOaXqeS4iuaZguauteeci-iouu-8jOiri-WFiOaPkOWJjemgkOe0hO-8iQ!5e0!3m2!1szh-TW!2stw!4v1750209555840!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
