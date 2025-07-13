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
  const router = useRouter();

  return (
    <main className="bg-[#E6D6CC] text-gray-900">
      {/* 🔹 關於我們 */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5A4032] flex items-center justify-center gap-2">
          <FaPaw className="text-yellow-500" /> 關於我們
        </h2>
        <div className="bg-white shadow-xl rounded-xl p-8 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            佰成動物醫院成立於 2012 年，致力於為大寮區提供優質的犬貓小動物醫療服務。
            <br /><br />
            我們以「人為本、有情萬物為念」為核心理念，並以親切溫暖的態度提供服務。
            「愛、關懷、服務、奉獻」是本院的經營宗旨，期盼每一位來院診治的小動物都能獲得完善而細緻的醫療照護。
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
            吳玟軒院長擁有堅實的學術背景，畢業自國立嘉義農專獸醫科、國立屏東科技大學獸醫學系，並進一步取得國立台灣大學獸醫學研究所碩士學位。多年來，他始終秉持著對動物深切的關懷與對醫療專業的高度要求，致力於提供細緻、誠摯且以毛孩福祉為核心的診療服務。
            <br /><br />
            吳院長深信，動物醫療不僅是技術與知識的應用，更是與飼主、與毛孩之間建立信任與理解的過程。他以親切溫暖的態度接待每一位病患，耐心聆聽飼主的需求，並結合臨床經驗與科學依據，提供最合適的診療建議。
            <br /><br />
            在他的帶領下，佰成動物醫院秉持「愛、關懷、服務、奉獻」的理念，持續精進醫療品質，期望成為每個家庭在毛孩健康旅程中最值得信賴的後盾。
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
              label: "家庭醫學",
              treatments: [
                "針對犬貓常見疾病提供整合性診療服務，建立長期健康管理關係。",
              ],
            },
            {
              label: "一般內科",
              treatments: [
                "從消化、內分泌、呼吸、泌尿等系統問題，提供全面診斷與治療。",
              ],
            },
            {
              label: "外科",
              treatments: [
                "進行軟組織手術、腫瘤切除、骨科處置等手術，安全且專業。",
              ],
            },
            {
              label: "皮膚科",
              treatments: [
                "針對搔癢、脫毛、皮膚過敏、感染等問題提供專業處理與追蹤。",
              ],
            },
            {
              label: "牙科",
              treatments: [
                "提供洗牙、牙科X光、拔牙等牙科相關治療，維護口腔健康。",
              ],
            },
            {
              label: "再生醫學治療",
              treatments: [
                "結合高濃度血小板血漿（PRP）、幹細胞等技術，促進組織修復與癒合。",
              ],
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
              地址：831高雄市大寮區鳳林三路674號
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-green-500" />
              電話：07-7867568
            </p>
          </div>

          {/* 門診時間 */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-12">
            <div className="flex-1 text-lg text-gray-800">
              <h3 className="text-2xl font-bold text-[#5A4032] mb-4">門診時間</h3>
              <ul className="leading-relaxed space-y-1">
                <li>星期一：09:00 – 12:30, 15:00 – 18:00, 18:30 – 21:00</li>
                <li>星期二：09:00 – 12:30, 15:00 – 18:00, 18:30 – 21:00</li>
                <li>星期三：09:00 – 12:30, 15:00 – 18:00, 18:30 – 21:00</li>
                <li>星期四：09:00 – 12:30, 15:00 – 18:00, 18:30 – 21:00</li>
                <li>星期五：09:00 – 12:30, 15:00 – 18:00, 18:30 – 21:00</li>
                <li>星期六：09:00 – 12:30, 15:00 – 18:00</li>
                <li className="text-red-700 font-bold">星期日：休息</li>
              </ul>
            </div>
          </div>

        </div>

        {/* 🔹 Google 地圖嵌入 */}
        <div className="w-full flex justify-center mt-8">
          <iframe
            title="Google Maps - 佰成動物醫院"
            className="w-full max-w-[1100px] h-[450px] rounded-lg shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.1811877896253!2d120.39380659999999!3d22.6097082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1b9cf4841ced%3A0x5451d924305274!2z5L2w5oiQ5YuV54mp6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1750299167664!5m2!1szh-TW!2stw"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
