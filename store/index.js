import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      filter: {
        category: {
          groupTitle: "종류",
          items: ["탁주", "약주", "증류주"],
          value: ["탁주", "약주", "증류주"]
        },
        ingredient: {
          groupTitle: "주재료",
          items: ["쌀", "고구마", "보리"],
          value: ["쌀", "고구마", "보리"]
        },
        makeTimes: {
          groupTitle: "빚은 횟수",
          items: ["단양주", "이양주", "삼양주 이상"],
          value: ["단양주", "이양주", "삼양주 이상"]
        },
        alcohol: {
          label: "도수",
          bounds: [0, 50],
          value: [0, 50],
          step: 5
        },
        sweet: {
          label: "단맛",
          bounds: [0, 5],
          value: [0, 5]
        },
        bitter: {
          label: "쓴맛",
          bounds: [0, 5],
          value: [0, 5]
        },
        sour: {
          label: "신맛",
          bounds: [0, 5],
          value: [0, 5]
        },
        aroma: {
          label: "향",
          bounds: [0, 5],
          value: [0, 5]
        },
        searchString: ""
      },
      // key represents product id
      products: [
        {
          id: 1,
          image: "/kamsablue.jpg",
          price: 34200,
          companyName: "술샘",
          productName: "감사블루",
          category: "약주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 375,
          rate: 4,
          alcohol: 14,
          sweet: 3,
          bitter: 2,
          sour: 5,
          aroma: 1,
          deliveryCharge: 3500,
          freeDeliveryMoney: 11000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_0_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171120_291/500060902_1511151115317mJLOx_JPEG/image_6219223101510882927764.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171120_291/500060902_1511151115317mJLOx_JPEG/image_6219223101510882927764.jpg?type=w860" width="860" height="907" data-attachment-id="IvQaqGKL1vLMyMruwlD4erN0m5x0" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0); background-color: rgb(255, 212, 167);"><b>감사블루</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(99, 99, 99);">프리미엄 살균약주 / 청주 / 차례주</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_118/500060902_15136303952574X1XU_PNG/image_3528552431513630049248.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_118/500060902_15136303952574X1XU_PNG/image_3528552431513630049248.jpg?type=w860" width="2101" height="2051" data-attachment-id="IG6HiHEy1ddmYktTiF8DFz-0JFt8" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span>감사블루는 일본식 청주와 비교를 거부하는 대한민국 전통 프리미엄 약주입니다. <span>경기미로 깔끔하게 빚은 맑은 술로</span> 남녀노 누구나 즐기 수 있는 맛과 향을 담고 있습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">· </span><span class="se_fs_T3" style="color: rgb(156, 156, 156);">지역&nbsp;</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">경기도 용인시</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">· </span><span class="se_fs_T3" style="color: rgb(156, 156, 156);">양조장</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 농업회사법인 주식회사 술샘<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">상품</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">명</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 감사블루<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">주종</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;살균약주<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">용량/도수</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp;375ml / 14%</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">원재료</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 쌀(경기미), 국(누룩, 국내산 밀 함유), </span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">국(조효소제,국내산 밀 함유), 효모, 정제수<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">제조일</span></span></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);"></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 주문일로부터 6개월 이내</span><span class="se_fs_T3"><br></span></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">유통기한</span></span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2년</span></span></span><br></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">보관방법</span></span></span></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);"></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;실온</span></span></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><br></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>01. 누가 생산하나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->종합 발효전문 회사 술샘
                 <br>대표이사 신인건
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_2_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_89/500060902_1509643479410KIclw_PNG/3_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_89/500060902_1509643479410KIclw_PNG/3_1.png?type=w860" width="860" height="867" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">술샘&nbsp;양조장의&nbsp;술에는&nbsp;쌀과&nbsp;물,&nbsp;누룩&nbsp;이외에는&nbsp;아무것도&nbsp;들어가지&nbsp;않습니다.&nbsp;수율이&nbsp;크게&nbsp;떨어지지만&nbsp;전통방식&nbsp;그대로&nbsp;빚는다는&nbsp;원칙을&nbsp;깨지&nbsp;않고&nbsp;좋은&nbsp;술을&nbsp;빚기&nbsp;위해&nbsp;들인&nbsp;노력과&nbsp;가치를&nbsp;알아줄&nbsp;수&nbsp;있는&nbsp;사람들이&nbsp;많아져서&nbsp;좋다는&nbsp;신인건&nbsp;대표는&nbsp;그의&nbsp;철학을&nbsp;지키기&nbsp;위해&nbsp;술을&nbsp;빚고&nbsp;있습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_video default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <div id="SEDOC-1513664629130--437681468_video_0" data-attachment-id="VVnaAZJSm0FidUHeeIxUqTFfFDG0" class="se_mediaArea"><iframe frameborder="0" title="NaverVideo" scrolling="no" width="579px" height="325.6875px" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?wmode=opaque&amp;vid=B1F10EC94B027D1C0204EF46E656092F18D9&amp;inKey=V1280089529103e8f9203fc00f15df45674a3d2742bcf2cc94dd66d77bb532b2a9854fc00f15df45674a3&amp;hasLink=1&amp;sizeRatio=0" allowfullscreen="" allow="autoplay; encrypted-media"></iframe></div>
             </div>
            </div>
           </div>
          </div>
          <script type="text/data" class="__se_module_data" data-module="{&quot;type&quot;:&quot;v1_video&quot;, &quot;docVersion&quot; : &quot;1.0&quot;, &quot;id&quot; :&quot;SEDOC-1513664629130--437681468_video_0&quot; , &quot;data&quot; : { &quot;baseElId&quot; : &quot;SEDOC-1513664629130--437681468_video_0&quot;, &quot;videoType&quot; : &quot;player&quot;, &quot;vid&quot; : &quot;B1F10EC94B027D1C0204EF46E656092F18D9&quot;, &quot;inkey&quot; : &quot;V1280089529103e8f9203fc00f15df45674a3d2742bcf2cc94dd66d77bb532b2a9854fc00f15df45674a3&quot;, &quot;width&quot;: &quot;1040&quot;, &quot;height&quot;: &quot;416&quot;, &quot;displayWidth&quot;: &quot;&quot;, &quot;displayHeight&quot;: &quot;&quot;}}"></script>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->인증/수상내역
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_35/500060902_1513656793590q0IwJ_JPEG/%28no%B8%AE%BA%BB%29%C0%CE%C1%F5%B8%B6%C5%A94p_preview.jpeg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_35/500060902_1513656793590q0IwJ_JPEG/%28no%B8%AE%BA%BB%29%C0%CE%C1%F5%B8%B6%C5%A94p_preview.jpeg?type=w860" width="860" height="1449" data-attachment-id="IpQpjFXWqmsBSr8lAkuOr6rKVNzc" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>02. 어디서 생산하나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->농업회사법인 주식회사 술샘
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_4_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171101_68/500060902_1509473768556jlujO_PNG/810x595_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171101_68/500060902_1509473768556jlujO_PNG/810x595_1.png?type=w860" width="810" height="595" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">술샘이&nbsp;위치한&nbsp;용인은&nbsp;강남에서&nbsp;30분&nbsp;거리에&nbsp;있는&nbsp;지역입니다.&nbsp;지친&nbsp;도시인이&nbsp;쉽게&nbsp;찾을&nbsp;수&nbsp;있는&nbsp;놀이공원,&nbsp;민속촌과&nbsp;리조트,&nbsp;골프장&nbsp;등의&nbsp;휴식&nbsp;공간을&nbsp;갖춘&nbsp;가까운&nbsp;도시인&nbsp;용인,&nbsp;술샘&nbsp;양조장&nbsp;역시&nbsp;일상에&nbsp;지쳐&nbsp;휴식이&nbsp;필요할&nbsp;때&nbsp;찾아와&nbsp;술&nbsp;한 잔을&nbsp;기울일&nbsp;수&nbsp;있는&nbsp;양조장이&nbsp;되기&nbsp;위해&nbsp;끊임없이&nbsp;노력하고&nbsp;있습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->생산 설비
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_5_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_211/500060902_15096434795404VVwR_PNG/4_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_211/500060902_15096434795404VVwR_PNG/4_1.png?type=w860" width="860" height="860" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>03. 상품은 어떤 특징이 있나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->최고급 살균약주
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_6_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_289/500060902_1513630985253PBWoC_JPEG/860x650.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_289/500060902_1513630985253PBWoC_JPEG/860x650.jpg?type=w860" width="860" height="650" data-attachment-id="ItYx0Q2NUgx-RMNI0IF6llQxqWMg" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);"></span>경기미로 깔끔하게 빚은 맑은 술로 명절 차례상에 올리기 좋은 술이며, 소량만 생산 되는 귀한 술입니다.<span class="se_fs_T3" style="color: rgb(0, 0, 0);"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->직접 디딘 누룩
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_7_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_142/500060902_1509643479662Wmus9_PNG/4_2.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_142/500060902_1509643479662Wmus9_PNG/4_2.png?type=w860" width="860" height="860" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->일본식 입국을 사용하지 않으며 술샘 연구소에서 자체 개발한 누룩을 직접 디뎌 술을 빚습니다.
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>04. 더 맛있게 먹는 방법?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->술과 어울리는 음식
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_38/500060902_1511982678522ykocv_JPEG/%C7%AA%B5%E5%BA%E429.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_38/500060902_1511982678522ykocv_JPEG/%C7%AA%B5%E5%BA%E429.jpg?type=w860" width="860" height="604" data-attachment-id="IplwsnL0V50RLvrdriHm4Dm0Zvaw" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T5"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_101/500060902_1511982702979F1xIF_JPEG/%C7%AA%B5%E5%BA%E434_1.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_101/500060902_1511982702979F1xIF_JPEG/%C7%AA%B5%E5%BA%E434_1.jpg?type=w860" width="860" height="604" data-attachment-id="IROsgFI7AA1uW-axkW7HjIp1E0gE" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T5"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_200/500060902_15119827388166XKTp_JPEG/%C7%AA%B5%E5%BA%E412.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_200/500060902_15119827388166XKTp_JPEG/%C7%AA%B5%E5%BA%E412.jpg?type=w860" width="860" height="604" data-attachment-id="IjtoH8jpFfRtiw3jzhv2GsPe-E3A" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T5"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_11_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_63/500060902_1511982763385zrtaU_JPEG/%C7%AA%B5%E5%BA%E428_1.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_63/500060902_1511982763385zrtaU_JPEG/%C7%AA%B5%E5%BA%E428_1.jpg?type=w860" width="860" height="604" data-attachment-id="IKjMKicTrajbfal1DcGAiRq_sFmk" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">은은하게&nbsp;올라오는&nbsp;과실향과&nbsp;익은&nbsp;곡물 맛이&nbsp;특징이며&nbsp;전체적으로&nbsp;단맛과&nbsp;신맛&nbsp;등&nbsp;오미의&nbsp;균형이&nbsp;잘&nbsp;갖춰져&nbsp;있고&nbsp;부드러운&nbsp;목넘김을&nbsp;가지고&nbsp;있다.&nbsp;전골류와&nbsp;잘&nbsp;어울린다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>05. 어떻게 배송되나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->배송 및 추가정보
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_12_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_196/500060902_1509643479824wLyWU_JPEG/810x500_1.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_196/500060902_1509643479824wLyWU_JPEG/810x500_1.jpg?type=w860" width="810" height="500" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span>1. 파손 방지 맞춤박스를 사용하여 배송 중 파손 위험을 줄였습니다.<br></span><span>2. 택배사 사정으로 인하여 배송 중 파손이 발생하였다면 고객센터로 바로 연락 주세요.</span><span>&nbsp;즉시 맞교환 상품을 발송하여 신속 정확하게 처리하겠습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_13_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_289/500060902_1513656902285fGDK5_JPEG/11_3%B9%E8%BC%DB%BE%C8%B3%BB_2_preview.jpeg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_289/500060902_1513656902285fGDK5_JPEG/11_3%B9%E8%BC%DB%BE%C8%B3%BB_2_preview.jpeg?type=w860" width="860" height="1480" data-attachment-id="IxCqN7oGoc0XJISorfGg_1xpGvCQ" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_14_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_193/500060902_1513664539325CtaG7_JPEG/11_3%B9%E8%BC%DB%BE%C8%B3%BB_preview_%281%29.jpeg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_14_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_193/500060902_1513664539325CtaG7_JPEG/11_3%B9%E8%BC%DB%BE%C8%B3%BB_preview_%281%29.jpeg?type=w860" width="860" height="1266" data-attachment-id="In_bkWnpCtzX-348MKUE4nRIbfEI" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>06. 상품 주문 전에 꼭 확인해주세요</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->자주 묻는 질문
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_15_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_78/500060902_1513656951270lp4RK_JPEG/12_QNA_preview.jpeg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_15_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_78/500060902_1513656951270lp4RK_JPEG/12_QNA_preview.jpeg?type=w860" width="860" height="1153" data-attachment-id="IEWu8zTR-HjJtBTMO-1CQs1LVAGo" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->반품 및 교환 / 환불
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_16_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171219_290/500060902_1513664554035QmfF3_JPEG/13-%B0%ED%B0%B4%BC%BE%C5%CD_1_preview.jpeg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_16_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171219_290/500060902_1513664554035QmfF3_JPEG/13-%B0%ED%B0%B4%BC%BE%C5%CD_1_preview.jpeg?type=w860" width="860" height="486" data-attachment-id="ImvjOxS0D3lGlJR30XmhcpIXEBzU" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1513664629130--437681468_image_17_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_166/500060902_1509643480041Y3dYU_PNG/12_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1513664629130--437681468_image_17_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_166/500060902_1509643480041Y3dYU_PNG/12_1.png?type=w860" width="860" height="207" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>`
        },
        {
          id: 2,
          image: "/leewhajoo.jpg",
          price: 24700,
          companyName: "술샘",
          productName: "이화주",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "이양주",
          volume: 500,
          rate: 3,
          alcohol: 8,
          sweet: 4,
          bitter: 1,
          sour: 1,
          aroma: 3,
          deliveryCharge: 2000,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_0_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171120_201/500060902_1511147887510Is31A_JPEG/image_6219223101510882927764.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171120_201/500060902_1511147887510Is31A_JPEG/image_6219223101510882927764.jpg?type=w860" width="860" height="907" data-attachment-id="IUBFB00FW3j-cLKQpoQY3yttmZY8" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0); background-color: rgb(255, 212, 167);"><b>이화주</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(99, 99, 99);">떠먹는 술 / 탁주</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171103_26/500060902_1509649371729yucVM_JPEG/image_6357636851509649194596.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_26/500060902_1509649371729yucVM_JPEG/image_6357636851509649194596.jpg?type=w860" width="2000" height="1690" data-attachment-id="I9yjQr347ywXEONpH5xocnjrLhZw" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span>100% 햅쌀과 최고급 전통 쌀누룩으로 정성 들여 빚어 새콤달콤하고 유기산과 효소, 효모가 살아있어 건강에 유익한 알코올 도수 8%인 품위 있는 전통 이화주입니다.</span><br><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line3">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">· </span><span class="se_fs_T3" style="color: rgb(156, 156, 156);">지역&nbsp;</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">경기도 용인시</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">· </span><span class="se_fs_T3" style="color: rgb(156, 156, 156);">양조장</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 농업회사법인 주식회사 술샘<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">상품</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">명</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 이화주<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">주종</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;생탁주 / 막걸리 / 떠먹는 술<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">용량/도수</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp;100ml / 8%</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">원재료</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 국내산 쌀 100% / 정제수<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">제조일</span></span></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);"></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 주문일로부터 1개월 이내</span><span class="se_fs_T3"><br></span></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">유통기한</span></span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp;6</span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">개월</span></span><br></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">보관방법</span></span></span></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);"></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp;냉장</span></span></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"></span></span><br></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line1">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>01. 누가 생산하나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->종합 발효전문 회사인 술샘의 대표이사 신인건
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_2_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_89/500060902_1509643479410KIclw_PNG/3_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_89/500060902_1509643479410KIclw_PNG/3_1.png?type=w860" width="860" height="867" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">술샘&nbsp;양조장의&nbsp;술에는&nbsp;쌀과&nbsp;물,&nbsp;누룩&nbsp;이외에는&nbsp;아무것도&nbsp;들어가지&nbsp;않습니다.&nbsp;수율이&nbsp;크게&nbsp;떨어지지만&nbsp;전통방식&nbsp;그대로&nbsp;빚는다는&nbsp;원칙을&nbsp;깨지&nbsp;않고&nbsp;좋은&nbsp;술을&nbsp;빚기&nbsp;위해&nbsp;들인&nbsp;노력과&nbsp;가치를&nbsp;알아줄&nbsp;수&nbsp;있는&nbsp;사람들이&nbsp;많아져서&nbsp;좋다는&nbsp;신인건&nbsp;대표는&nbsp;그의&nbsp;철학을&nbsp;지키기&nbsp;위해&nbsp;술을&nbsp;빚고&nbsp;있습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_video default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <div id="SEDOC-1512024085280--1604209819_video_0" data-attachment-id="VPPCUmSe566dUSpD1hwoc5PzN4g0" class="se_mediaArea"><iframe frameborder="0" title="NaverVideo" scrolling="no" width="579px" height="325.6875px" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?wmode=opaque&amp;vid=01DF91B8EFA348504D599B5051667AA86F18&amp;inKey=V125d19890fc14bf494f7b898e3742642402692443b1438a18f71496bbc8f1392a74eb898e37426424026&amp;hasLink=1&amp;sizeRatio=0" allowfullscreen="" allow="autoplay; encrypted-media"></iframe></div>
             </div>
            </div>
           </div>
          </div>
          <script type="text/data" class="__se_module_data" data-module="{&quot;type&quot;:&quot;v1_video&quot;, &quot;docVersion&quot; : &quot;1.0&quot;, &quot;id&quot; :&quot;SEDOC-1512024085280--1604209819_video_0&quot; , &quot;data&quot; : { &quot;baseElId&quot; : &quot;SEDOC-1512024085280--1604209819_video_0&quot;, &quot;videoType&quot; : &quot;player&quot;, &quot;vid&quot; : &quot;01DF91B8EFA348504D599B5051667AA86F18&quot;, &quot;inkey&quot; : &quot;V125d19890fc14bf494f7b898e3742642402692443b1438a18f71496bbc8f1392a74eb898e37426424026&quot;, &quot;width&quot;: &quot;1040&quot;, &quot;height&quot;: &quot;416&quot;, &quot;displayWidth&quot;: &quot;&quot;, &quot;displayHeight&quot;: &quot;&quot;}}"></script>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_37/500060902_1512024078145tYs0b_JPEG/%BC%FA%BB%F9_%C0%CE%C1%F5%B8%B6%C5%A9%284p%29_preview_jpeg.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_37/500060902_1512024078145tYs0b_JPEG/%BC%FA%BB%F9_%C0%CE%C1%F5%B8%B6%C5%A9%284p%29_preview_jpeg.jpg?type=w860" width="860" height="1757" data-attachment-id="IkC6-nHGIXD7wHXo8MOK9NQ7kZCE" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>02. 어디서 생산하나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->농업회사법인 주식회사 술샘
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_4_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171101_68/500060902_1509473768556jlujO_PNG/810x595_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171101_68/500060902_1509473768556jlujO_PNG/810x595_1.png?type=w860" width="810" height="595" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">술샘이&nbsp;위치한&nbsp;용인은&nbsp;강남에서&nbsp;30분&nbsp;거리에&nbsp;있는&nbsp;지역입니다.&nbsp;지친&nbsp;도시인이&nbsp;쉽게&nbsp;찾을&nbsp;수&nbsp;있는&nbsp;놀이공원,&nbsp;민속촌과&nbsp;리조트,&nbsp;골프장&nbsp;등의&nbsp;휴식&nbsp;공간을&nbsp;갖춘&nbsp;가까운&nbsp;도시인&nbsp;용인,&nbsp;술샘&nbsp;양조장&nbsp;역시&nbsp;일상에&nbsp;지쳐&nbsp;휴식이&nbsp;필요할&nbsp;때&nbsp;찾아와&nbsp;술&nbsp;한 잔을&nbsp;기울일&nbsp;수&nbsp;있는&nbsp;양조장이&nbsp;되기&nbsp;위해&nbsp;끊임없이&nbsp;노력하고&nbsp;있습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->생산 설비
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_5_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_211/500060902_15096434795404VVwR_PNG/4_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_211/500060902_15096434795404VVwR_PNG/4_1.png?type=w860" width="860" height="860" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>03. 상품은 어떤 특징이 있나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->떠먹는 술
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_6_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171103_236/500060902_1509649660031EImgh_JPEG/image_2558718691509649194546.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_236/500060902_1509649660031EImgh_JPEG/image_2558718691509649194546.jpg?type=w860" width="2024" height="1469" data-attachment-id="ITQGdkUj-y9ypo077hDrL119eWfE" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);"></span><span style="color: rgb(0, 0, 0);">고려 시대부터 전해오는 농후한 맛의 떠먹는 술인 이화주는 쌀로 누룩을 만들고 쌀로 구멍 떡을 만들어 걸쭉하게 빚은 전통 탁주로 쌀에서 나오는 깊은 단맛과 유기산이 내는 풍부한 신맛이 어우러진 양반가에서 즐겨 마셨던 귀한 술입니다. 기호에 따라 숟가락으로 떠드셔도 되고 물에 타서 시원하게 드셔도 좋습니다.</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->직접 디딘 누룩
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_7_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_142/500060902_1509643479662Wmus9_PNG/4_2.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_142/500060902_1509643479662Wmus9_PNG/4_2.png?type=w860" width="860" height="860" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->일본식 입국을 사용하지 않으며 술샘 연구소에서 자체 개발한 누룩을 직접 디뎌 술을 빚습니다.
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>04. 더 맛있게 먹는 방법?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->술과 어울리는 음식
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_80/500060902_1511988647733F0UPF_JPEG/%C7%AA%B5%E5%BA%E431.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_80/500060902_1511988647733F0UPF_JPEG/%C7%AA%B5%E5%BA%E431.jpg?type=w860" width="860" height="604" data-attachment-id="I_ox1NqWSvgmM5gGNxi0DQv3R0x4" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T5"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_19/500060902_1511988665221VdoDM_JPEG/%C7%AA%B5%E5%BA%E421_1.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_19/500060902_1511988665221VdoDM_JPEG/%C7%AA%B5%E5%BA%E421_1.jpg?type=w860" width="860" height="604" data-attachment-id="IldOOLyDTvc51LzBDjOScfeozc7g" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T5"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_173/500060902_1511988683810fIie7_JPEG/%C7%AA%B5%E5%BA%E49.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_173/500060902_1511988683810fIie7_JPEG/%C7%AA%B5%E5%BA%E49.jpg?type=w860" width="860" height="604" data-attachment-id="I5trQLQxlpKT-05Smhj_gZpR7YU0" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T5"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_11_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171130_207/500060902_1511988702242bTVA3_JPEG/%C7%AA%B5%E5%BA%E411_1.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_207/500060902_1511988702242bTVA3_JPEG/%C7%AA%B5%E5%BA%E411_1.jpg?type=w860" width="860" height="604" data-attachment-id="IE2nKEoPCoueK9nhOay2_ewd8W9g" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">이화주는 코스요리 전후의 애피타이저 또는 디저트로&nbsp; 어울리며 요구르트처럼 생과일 또는 후르츠 칵테일, 시리얼과 매우 잘 어울리는 술입니다. 또한 기호에 맞게 물에 타 드시면 특유의 맛이 나는 막걸리가 됩니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>05. 어떻게 배송되나요?</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->배송 및 추가정보
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_12_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_116/500060902_1509643479765onV4G_PNG/9_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_116/500060902_1509643479765onV4G_PNG/9_1.png?type=w860" width="860" height="518" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_13_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_196/500060902_1509643479824wLyWU_JPEG/810x500_1.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_196/500060902_1509643479824wLyWU_JPEG/810x500_1.jpg?type=w860" width="810" height="500" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span>1. 파손 방지 맞춤박스를 사용하여 배송 중 파손 위험을 줄였습니다.<br></span><span>2. 택배사 사정으로 인하여 배송 중 파손이 발생하였다면 고객센터로 바로 연락 주세요.</span><span>&nbsp;즉시 맞교환 상품을 발송하여 신속 정확하게 처리하겠습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0);"><b>06. 상품 주문 전에 꼭 확인해주세요</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->자주 묻는 질문
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_14_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_263/500060902_1509643479918bEilc_PNG/10_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_14_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_263/500060902_1509643479918bEilc_PNG/10_1.png?type=w860" width="860" height="490" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->반품 및 교환 / 환불
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_15_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_290/500060902_1509643479985zjMUh_PNG/11_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_15_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_290/500060902_1509643479985zjMUh_PNG/11_1.png?type=w860" width="860" height="482" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1512024085280--1604209819_image_16_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171103_166/500060902_1509643480041Y3dYU_PNG/12_1.png?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1512024085280--1604209819_image_16_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_166/500060902_1509643480041Y3dYU_PNG/12_1.png?type=w860" width="860" height="207" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1"><b></b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>`
        },
        {
          id: 3,
          image: "/leewhabaekjoo.jpg",
          price: 34200,
          companyName: "이화백주",
          productName: "이화백주",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 940,
          rate: 5,
          alcohol: 6,
          sweet: 4,
          bitter: 2,
          sour: 3,
          aroma: 4,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_0_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_222/100898249_1522049061726jdq6K_JPEG/ewha_event.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_222/100898249_1522049061726jdq6K_JPEG/ewha_event.jpg?type=w860" width="860" height="543" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);" class="se_fs_T2"><b></b><br></span><span style="color: rgb(0, 0, 0);" class="se_fs_T2"><b>'막페인' (막걸리+샴페인) 맛 보실래요</b></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: #000000;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->천연탄산이 톡톡 이화백주
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);" class="se_fs_T3">자연발효 과정에서 생긴 천연탄산이 입안에서 톡톡<br></span><span style="color: rgb(0, 0, 0);" class="se_fs_T3">우리 쌀로 만든 프리미엄 생막걸리<br></span><span style="color: rgb(0, 0, 0);" class="se_fs_T3"><br></span><span style="color: rgb(0, 0, 0);" class="se_fs_T3"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_1_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_144/100898249_1522049061918eUAMa_JPEG/ddddddd.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_144/100898249_1522049061918eUAMa_JPEG/ddddddd.jpg?type=w860" width="860" height="966" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line2">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: #000000;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->01<br>누가 생산하나요?
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->이화백주
                 <br>대표 이미경
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T2">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->쿰쿰한 냄새와 텁텁한 맛, 심한 숙취.
                 <br>탁주의 부정적인 인식을 벗어나 현대적인 감각을 더한
                 <br>우리 술의 가치를 알리고 싶습니다.
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_63/100898249_1522115422402IG05l_JPEG/image_5187802901522115410934.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_63/100898249_1522115422402IG05l_JPEG/image_5187802901522115410934.jpg?type=w860" width="860" height="569" data-attachment-id="IPureB-ClOOOMN5n6PPAOizLdsUc" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_81/100898249_1522115243826Nj7Ee_JPEG/22222.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_81/100898249_1522115243826Nj7Ee_JPEG/22222.jpg?type=w860" width="860" height="1089" data-attachment-id="ISzYl3if0DWzCZdXS2YjXrNF8oMU" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);">쿰쿰한 냄새와 텁텁한 맛, 싸고 촌스럽다는 부정적인 인식을 벗어나 자연발효 과정에서 생긴 탄산으로&nbsp;</span><span style="color: rgb(0, 0, 0);">세련미와 현대적 감각을 더한 막걸리입니다. 잊혀져가는 우리 술의 가치에&nbsp;</span><span style="color: rgb(0, 0, 0);">현대적인 감각을 더해 젊은 세대들에게&nbsp;<span style=" color: rgb(0, 0, 0)">알릴 수 있도록 노력하고 있습니다. </span></span><span style="color: rgb(0, 0, 0);"><span style=" color: rgb(0, 0, 0)">15</span></span><span>일&nbsp;가량&nbsp;저온&nbsp;숙성하여&nbsp;부드러운&nbsp;맛과&nbsp;풍미를&nbsp;살린&nbsp;이화백주는&nbsp;자가탁주로&nbsp;하루&nbsp;최대&nbsp;200병만&nbsp;생산됩니다.&nbsp;우리&nbsp;쌀로&nbsp;만든&nbsp;전통&nbsp;누룩으로&nbsp;빚어&nbsp;텁텁하지&nbsp;않고&nbsp;자연에서&nbsp;온&nbsp;순수함 그대로의 맛과 전통 누룩의 깊은 풍미를 즐길 수 있는 제품입니다.<br></span><span><br></span><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_4_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_133/100898249_1522111581949WOJkF_JPEG/090.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_133/100898249_1522111581949WOJkF_JPEG/090.jpg?type=w860" width="860" height="600" data-attachment-id="ICpUTI7ATysVwgZX5vhrYIII5W9g" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_5_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_163/100898249_1522049062208pXnOT_JPEG/s.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_163/100898249_1522049062208pXnOT_JPEG/s.jpg?type=w860" width="860" height="573" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);" class="se_fs_T3">이화백주 순탁주는 지역의 할머니, 할아버지께서 직접 전통방식으로 띄우는 수제 옛날 누룩을 100%만을 사용해 막걸리를 제조하기 때문에 풍미가 뛰어나며 숙취가 적습니다.</span><br>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line2">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: #000000;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->02<br>어디서 생산하나요?
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->경상남도 양산시 상북면
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:380px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_6_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171026_119/100898249_1508998634187JqFMY_JPEG/ewha_ver1.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171026_119/100898249_1508998634187JqFMY_JPEG/ewha_ver1.jpg?type=w860" width="380" height="365" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_7_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_154/100898249_1522049062313obTzc_JPEG/999.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_154/100898249_1522049062313obTzc_JPEG/999.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_8_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_128/100898249_1522049062421Vpwqs_JPEG/uu.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_128/100898249_1522049062421Vpwqs_JPEG/uu.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="" class="se_fs_T3"><span style="color: rgb(0, 0, 0);">푸른 숲, 경남 양산의 금개구리쌀과 삽량주쌀, 천성산의 물, 쌀을 당화시킨 천연당분 그리고 옛날 방식으로 만든 수제 누룩을 100% 사용하여 전통 방식으로 빚는 이화백주는 자극적이지 않은 탄산의 청량감과 우리 쌀로 빚어 부드러운 목넘김이 특징입니다.</span></span><br>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line2">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: #000000;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->03<br>이화백주는 어떻게 다른가요?
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->無첨가물 천연재료
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3">無첨가 (인공감미료, 인공효모, 조효소제)와&nbsp;<span style="color: rgb(0, 0, 0);">할머니, 할아버지께서 직접 전통방식으로 띄우는 수제 옛날 누룩으로</span>&nbsp;자연에서 온 순수한 맛과 자연발효 과정에서 생긴 천연 탄산의 시원한 청량감, 달콤한 목넘김으로 밋밋한 감이 있어 강하게 양념한 안주 맛에 묻히는 기존의 탁주와는 달리 이화백주는 다양한 안주와 먹을 때 비로소 진가를 발휘합니다.&nbsp;</span><br>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_155/100898249_1522111494825NfE9P_JPEG/777.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_155/100898249_1522111494825NfE9P_JPEG/777.jpg?type=w860" width="860" height="600" data-attachment-id="IpSAn085TcX_seNhGRNkWh14-PLo" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_11/100898249_1522111399139Ga4Bp_JPEG/eeee.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_11/100898249_1522111399139Ga4Bp_JPEG/eeee.jpg?type=w860" width="860" height="600" data-attachment-id="ITm_asiWfFpCGUenrGBk9N-GuJ1M" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->오랜 시간의 기다림
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span>이화백주&nbsp;순탁주는&nbsp;지역의&nbsp;할머니,&nbsp;할아버지께서&nbsp;직접&nbsp;전통방식으로&nbsp;띄우는&nbsp;수제&nbsp;옛날&nbsp;누룩을&nbsp;100%&nbsp;사용하고&nbsp;있습니다.&nbsp;곱게&nbsp;분쇄한&nbsp;누룩을&nbsp;법제하여&nbsp;유해한&nbsp;균을&nbsp;억제하는&nbsp;과정을&nbsp;거쳐&nbsp;이화백주가&nbsp;탄생합니다.&nbsp;입국으로&nbsp;3~4일일에&nbsp;대량&nbsp;생산이&nbsp;가능한&nbsp;막걸리에&nbsp;비해&nbsp;당화력이&nbsp;약해&nbsp;9~15일의&nbsp;발효기간과&nbsp;술더의&nbsp;온도관리,&nbsp;담금조의&nbsp;원활한&nbsp;산소공급을&nbsp;위해서&nbsp;위아래로&nbsp;저어주는&nbsp;술&nbsp;뒤집기&nbsp;공정&nbsp;등을&nbsp;수회에&nbsp;나누어&nbsp;손수합니다.</span><span><br></span><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_11_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_98/100898249_1522049062527mTccL_JPEG/ooo.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_98/100898249_1522049062527mTccL_JPEG/ooo.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_12_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_148/100898249_1522049062624DxSCJ_JPEG/ii.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_148/100898249_1522049062624DxSCJ_JPEG/ii.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->5味를 느낄 수 있는 탁주
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);">세상에서 가장 부드러운 하얀술 이화백주 순탁주. 인공효모와 조효소제를 사용하지 않고 100%전통누룩을&nbsp;사용함으로써 술을 빚으면 깊고 풍부한 맛과 향을 줍니다. 또한 잔향이 많이 남아 맛이 부드럽습니다. 막걸리를 입에 한 모금 머금고 있으면 5味(다섯가지맛)인 단맛, 쓴맛, 신맛, 청량감, 걸쭉한 맛을 동시에 느낄 수 있습니다.&nbsp;</span><span style="color: rgb(0, 0, 0);"><br></span><span style="color: rgb(0, 0, 0);"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_13_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_239/100898249_1522049062703pWSfa_JPEG/88.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_239/100898249_1522049062703pWSfa_JPEG/88.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_14_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_210/100898249_15220490627989wsXk_JPEG/oooo.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_14_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_210/100898249_15220490627989wsXk_JPEG/oooo.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H3 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h6 class="se_textarea">
                 <!-- SE3-TEXT { -->개봉&nbsp;전&nbsp;흔들지&nbsp;마세요!
                 <!-- } SE3-TEXT --></h6>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3">저온숙성&nbsp;과정에서&nbsp;생긴&nbsp;자연적인&nbsp;탄산이&nbsp;빠르게&nbsp;올라옵니다 개봉하실&nbsp;때&nbsp;뚜껑을&nbsp;살짝&nbsp;돌려서&nbsp;탄산이&nbsp;올라오는&nbsp;것을&nbsp;확인하신&nbsp;후 병마개를&nbsp;열었다&nbsp;닫았다를&nbsp;5회&nbsp;정도&nbsp;반복하면&nbsp;탄산이&nbsp;빠져&nbsp;나갑니다. 그&nbsp;이후&nbsp;잘&nbsp;섞이면&nbsp;개봉하시면&nbsp;됩니다.<br></span><span class="se_fs_T3"><br></span><span class="se_fs_T3"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_15_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_75/100898249_152211185837991JLx_JPEG/image_8123783971522111826653.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_15_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_75/100898249_152211185837991JLx_JPEG/image_8123783971522111826653.jpg?type=w860" width="860" height="551" data-attachment-id="IOlfEn9WmKERtg5x6W_qqMbyAQbE" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_16_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_274/100898249_1522111868934LKFeP_JPEG/image_3362598531522111831895.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_16_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_274/100898249_1522111868934LKFeP_JPEG/image_3362598531522111831895.jpg?type=w860" width="860" height="555" data-attachment-id="I55vj5jCTZsJzRL3l_q01ydkqLnQ" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_17_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180326_119/100898249_15220490630240om6y_JPEG/dddd.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_17_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180326_119/100898249_15220490630240om6y_JPEG/dddd.jpg?type=w860" width="860" height="1903" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line2">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: #000000;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->04<br>어떻게 배송되나요?
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3">여름엔&nbsp;시원하게!&nbsp;아이스팩이&nbsp;동봉되어&nbsp;배송됩니다. <br></span><span class="se_fs_T3">효모가&nbsp;살아있는&nbsp;냉장보관용으로, 유통기한이&nbsp;제조일로부터&nbsp;20일입니다.</span><span class="se_fs_T4"><br></span><span class="se_fs_T4"><br></span><span class="se_fs_T4"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1525770067887-1497225431_image_18_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_191/100898249_15221285649709EyTq_JPEG/hy.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1525770067887-1497225431_image_18_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_191/100898249_15221285649709EyTq_JPEG/hy.jpg?type=w860" width="860" height="522" data-attachment-id="I5YXTcnvRDQ7Ay1bvlGUditel10U" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line2">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: #000000;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->05<br>맛있게 먹는 법은요?
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3"><b></b></span><span>전통과&nbsp;현대의&nbsp;맛,&nbsp;이화백주와&nbsp;어울리는&nbsp;음식 전통누룩을&nbsp;사용해&nbsp;깊고&nbsp;풍부한&nbsp;맛과&nbsp;향,&nbsp;잔당이&nbsp;은은하게&nbsp;남아 전체적으로&nbsp;맛의&nbsp;밸런스가&nbsp;좋고,&nbsp;향이&nbsp;강한&nbsp;음식,&nbsp; 제육볶음,&nbsp;김치찌개와&nbsp;잘&nbsp;어울립니다.&nbsp;</span><span class="se_fs_T3">스파클링한&nbsp;맛으로&nbsp;양념치킨과도&nbsp;궁합이&nbsp;좋습니다.&nbsp; 양념치킨&nbsp;소스와&nbsp;이화백주의&nbsp;경쾌한&nbsp;탄산,&nbsp; 약간의&nbsp;단맛이&nbsp;만나&nbsp;상큼함을&nbsp;더하고&nbsp;매콤함은&nbsp;부드럽게&nbsp;잡아줍니다.<br></span><span class="se_fs_T3"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line2">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="viewArea">
              <div class="se_horizontalLineView">
               <div class="se_hr">
                <hr>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H3 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h6 class="se_textarea">
                 <!-- SE3-TEXT { -->제품&nbsp;구성&nbsp;및&nbsp;표기사항
                 <!-- } SE3-TEXT --></h6>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T4">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->품명 : 이화백주
                 <br>식품의 유형 : 탁주
                 <br>생산지 : 경상남도 양산시
                 <br>에탄올 함량 : 6%
                 <br>내용량 : 940mlX3병
                 <br>보관방법: 10도 이하 냉장보관
                 <br>주의사항 : 지나친 음주는 암 발생의 원인이며, 임신 중 음주는 태아의 기형이나 유산, 청소년 음주는 성장과 뇌 발달을 저해합니다.
                 <br>원재료명 및 함량 : 정제수, 쌀(국산), 엿류, 곡자
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_paragraph default">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>`
        }
      ],
      reviews: {
        1: [
          {
            id: 1,
            rate: 1,
            title: "별로에요",
            submitDate: "2018.01.12",
            content: "노맛"
          },
          {
            id: 2,
            rate: 2,
            title: "그냥... 그저 그런 막걸리",
            submitDate: "2018.01.12",
            content: "마트에서 사먹는 막걸리랑 다를게 없습니다."
          },
          {
            id: 3,
            rate: 4,
            title: "맛있어요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 4,
            rate: 3,
            title: "보통",
            submitDate: "2018.01.12",
            content: "보통"
          },
          {
            id: 5,
            rate: 5,
            title: "인생막걸리",
            submitDate: "2018.01.12",
            content: "인생막걸리를 찾았습니다."
          },
          {
            id: 6,
            rate: 2,
            title: "흠..",
            submitDate: "2018.01.12",
            content: "흠..."
          },
          {
            id: 7,
            rate: 1,
            title: "노맛",
            submitDate: "2018.01.12",
            content: "개 노맛. 돈 아까워요"
          }
        ],
        2: [
          {
            id: 1,
            rate: 1,
            title: "별로에요",
            submitDate: "2018.01.12",
            content: "노맛"
          },
          {
            id: 2,
            rate: 2,
            title: "그냥... 그저 그런 막걸리",
            submitDate: "2018.01.12",
            content: "마트에서 사먹는 막걸리랑 다를게 없습니다."
          },
          {
            id: 3,
            rate: 4,
            title: "맛있어요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 4,
            rate: 3,
            title: "보통",
            submitDate: "2018.01.12",
            content: "보통"
          },
          {
            id: 5,
            rate: 5,
            title: "인생막걸리",
            submitDate: "2018.01.12",
            content: "인생막걸리를 찾았습니다."
          },
          {
            id: 6,
            rate: 2,
            title: "흠..",
            submitDate: "2018.01.12",
            content: "흠..."
          },
          {
            id: 7,
            rate: 1,
            title: "노맛",
            submitDate: "2018.01.12",
            content: "개 노맛. 돈 아까워요"
          }
        ],
        3: [
          {
            id: 1,
            rate: 1,
            title: "별로에요",
            submitDate: "2018.01.12",
            content: "노맛"
          },
          {
            id: 2,
            rate: 2,
            title: "그냥... 그저 그런 막걸리",
            submitDate: "2018.01.12",
            content: "마트에서 사먹는 막걸리랑 다를게 없습니다."
          },
          {
            id: 3,
            rate: 4,
            title: "맛있어요",
            submitDate: "2018.01.12",
            content: "맛있고 잘 샀습니다. 또 구매할 것 같아요"
          },
          {
            id: 4,
            rate: 3,
            title: "보통",
            submitDate: "2018.01.12",
            content: "보통"
          },
          {
            id: 5,
            rate: 5,
            title: "인생막걸리",
            submitDate: "2018.01.12",
            content: "인생막걸리를 찾았습니다."
          },
          {
            id: 6,
            rate: 2,
            title: "흠..",
            submitDate: "2018.01.12",
            content: "흠..."
          },
          {
            id: 7,
            rate: 1,
            title: "노맛",
            submitDate: "2018.01.12",
            content: "개 노맛. 돈 아까워요"
          }
        ]
      },
      questions: {
        1: [
          {
            id: 1,
            questionDate: "2018.01.02",
            questionContent: "배송일이 언제인가요?",
            answerDate: "2018.01.02",
            answerContent: "오늘 발송해드렸습니다. 통상 내일 도착합니다. 송장번호 확인해 주세요"
          },
          {
            id: 2,
            questionDate: "2018.01.02",
            questionContent: "맛있나요?",
            answerDate: "2018.01.02",
            answerContent: "완전 맛있습니다. 자신합니다."
          }
        ],
        2: [
          {
            id: 1,
            questionDate: "2018.01.02",
            questionContent: "배송일이 언제인가요?",
            answerDate: "2018.01.02",
            answerContent: "오늘 발송해드렸습니다. 통상 내일 도착합니다. 송장번호 확인해 주세요"
          },
          {
            id: 2,
            questionDate: "2018.01.02",
            questionContent: "맛있나요?",
            answerDate: "2018.01.02",
            answerContent: "완전 맛있습니다. 자신합니다."
          }
        ],
        3: [
          {
            id: 1,
            questionDate: "2018.01.02",
            questionContent: "배송일이 언제인가요?",
            answerDate: "2018.01.02",
            answerContent: "오늘 발송해드렸습니다. 통상 내일 도착합니다. 송장번호 확인해 주세요"
          },
          {
            id: 2,
            questionDate: "2018.01.02",
            questionContent: "맛있나요?",
            answerDate: "2018.01.02",
            answerContent: "완전 맛있습니다. 자신합니다."
          }
        ]
      },
      cartItems: [
        // {
        //   productId: 1,
        //   quantity: 2
        // },
        // {
        //   productId: 2,
        //   quantity: 1
        // }
      ],
      checkoutItems: [
        // {
        //   productId: 1,
        //   quantity: 2
        // },
        // {
        //   productId: 2,
        //   quantity: 1
        // }
      ],
      user: null,
      buyers: [
        // {
        //   id: 1,
        //   name: "정남훈",
        //   phoneNumber: "010-5056-1149",
        //   address: "서울시 송파구 삼전동 176-11 401호",
        //   isDefault: true
        // },
        // {
        //   id: 2,
        //   name: "정미경",
        //   phoneNumber: "010-1111-3154",
        //   address: "서울시 송파구 삼전동 176-11 402호",
        //   isDefault: false
        // }
      ],
      currentBuyerId: null,
      addresses: [
        // {
        //   id: 1,
        //   title: "집",
        //   name: "정남훈",
        //   phoneNumber: "010-5056-1149",
        //   address: "서울시 송파구 삼전동 176-11 401호",
        //   isDefault: false
        // },
        // {
        //   id: 2,
        //   title: "회사",
        //   name: "정남훈",
        //   phoneNumber: "010-1111-3154",
        //   address: "서울시 송파구 삼전동 176-11 402호",
        //   isDefault: false
        // }
      ],
      currentAddressId: null
    },
    getters: {
      filteredProducts(state) {
        const inRange = (range, value) => {
          return range[0] <= value && value <= range[1];
        };
        let filter = state.filter;
        return state.products.filter(
          (cur, idx, arr) =>
            filter.category.value.indexOf(cur.category) > -1 &&
            filter.ingredient.value.indexOf(cur.ingredient) > -1 &&
            filter.makeTimes.value.indexOf(cur.makeTimes) > -1 &&
            inRange(filter.alcohol.value, cur.alcohol) &&
            inRange(filter.sweet.value, cur.sweet) &&
            inRange(filter.bitter.value, cur.bitter) &&
            inRange(filter.sour.value, cur.sour) &&
            inRange(filter.aroma.value, cur.aroma) &&
            cur.productName.indexOf(filter.searchString) > -1
        );
      },
      getQuestionsByProductId: state => id => {
        console.debug("getQuestionsByProductId called");
        return state.questions[id];
      },
      getReviewsByProductId: state => id => {
        console.debug("getReviewsByProductId called");
        return state.reviews[id];
      },
      getProductById: state => id => {
        console.debug("getProductById called");
        return state.products.find(cur => cur.id == id);
      },
      getCartProducts(state) {
        // products and cartItems should be sorted by id
        let cartItems = state.cartItems;
        let products = state.products;
        let cartIdx = 0;
        let productIdx = 0;
        let ret = [];
        while (cartIdx < cartItems.length && productIdx < products.length) {
          let curId = cartItems[cartIdx].productId;
          while (productIdx < products.length) {
            if (products[productIdx].id == curId) {
              let item = Object.assign({}, products[productIdx]);
              item.quantity = cartItems[cartIdx].quantity;
              item.checked = true;
              ret.push(item);
              break;
            }
            ++productIdx;
          }
          ++cartIdx;
        }
        return ret;
      },
      checkoutProducts(state) {
        // products and checkoutItems should be sorted by id
        let checkoutItems = state.checkoutItems;
        let products = state.products;
        let checkoutIdx = 0;
        let productIdx = 0;
        let ret = [];
        while (checkoutIdx < checkoutItems.length && productIdx < products.length) {
          let curId = checkoutItems[checkoutIdx].productId;
          while (productIdx < products.length) {
            if (products[productIdx].id == curId) {
              let item = Object.assign({}, products[productIdx]);
              item.quantity = checkoutItems[checkoutIdx].quantity;
              ret.push(item);
              break;
            }
            ++productIdx;
          }
          ++checkoutIdx;
        }
        return ret;
      },
      currentBuyer(state) {
        if (state.currentBuyerId) {
          return state.buyers.find(buyer => buyer.id == state.currentBuyerId);
        } else {
          return state.buyers.find(buyer => buyer.isDefault);
        }
      },
      addresses(state, getters) {
        let ret = [];
        let sameToBuyer = {
          ...getters.currentBuyer,
          id: 0,
          title: "구매자와 동일",
          isDefault: false
        };
        ret.push(sameToBuyer);
        state.addresses.forEach(cur => ret.push({ ...cur }));
        return ret;
      },
      currentAddress(state, getters) {
        let defaultAddress = getters.addresses.find(address => address.isDefault);

        if (state.currentAddressId != undefined && state.currentAddressId != null) {
          return getters.addresses.find(address => address.id == state.currentAddressId);
        } else if (defaultAddress) {
          return defaultAddress;
        } else {
          return getters.addresses[0];
        }
      }
    },
    // TODO: refactoring
    mutations: {
      updateFilter(state, payload) {
        for (let key in payload) {
          if (key === "searchString") {
            state.filter.searchString = payload.searchString;
          } else {
            state.filter[key].value = Array.isArray(payload[key])
              ? payload[key].slice()
              : payload[key];
          }
        }
      },
      addCartItem(state, payload) {
        state.cartItems.push({
          productId: payload.productId,
          quantity: payload.quantity
        });
        state.cartItems.sort((a, b) => (a.productId < b.productId ? -1 : 1));
      },
      updateCartItem(state, payload) {
        state.cartItems.find(cur => cur.productId == payload.productId).quantity = payload.quantity;
      },
      deleteCartItem(state, id) {
        let targetIndex = state.cartItems.findIndex(cur => cur.productId == id);
        state.cartItems.splice(targetIndex, 1);
      },
      updateCheckout(state, payload) {
        state.checkoutItems = payload;
      },
      updateUser(state, payload) {
        state.user = payload;
      },
      updateCurrentBuyerId(state, id) {
        state.currentBuyerId = id;
      },
      addBuyer(state, payload) {
        let id =
          state.buyers.length == 0 ? 1 : Number(state.buyers[state.buyers.length - 1].id) + 1;
        let newBuyer = {
          id,
          ...payload
        };
        if (payload.isDefault) {
          state.buyers.forEach(item => (item.isDefault = false));
        }
        state.buyers.push(newBuyer);
      },
      updateBuyer(state, payload) {
        let buyer = state.buyers.find(cur => cur.id == payload.id);
        if (payload.isDefault) {
          state.buyers.forEach(item => (item.isDefault = false));
        }
        Object.assign(buyer, payload);
      },
      updateCurrentAddressId(state, id) {
        state.currentAddressId = id;
      },
      addAddress(state, payload) {
        let id =
          state.addresses.length == 0 ? 1 : state.addresses[state.addresses.length - 1].id + 1;
        let newAddress = {
          id,
          ...payload
        };
        if (payload.isDefault) {
          state.addresses.forEach(item => (item.isDefault = false));
        }
        state.addresses.push(newAddress);
      },
      updateAddress(state, payload) {
        let address = state.addresses.find(cur => cur.id == payload.id);
        if (payload.isDefault) {
          state.addresses.forEach(item => (item.isDefault = false));
        }
        Object.assign(address, payload);
      },
      signUp(state, payload) {
        this.state.user = {
          email: payload.email
        };
      }
    },
    actions: {}
  });
};

export default createStore;
