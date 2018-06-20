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
        },
        {
          id: 4,
          image: "/baekwoon-bokbunja.jpg",
          price: 19000,
          companyName: "백운주가",
          productName: "백운 복분자와인",
          category: "증류주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 300,
          rate: 4,
          alcohol: 11,
          sweet: 5,
          bitter: 3,
          sour: 2,
          aroma: 5,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_0_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_218/101143651_1527215046707qYg0d_JPEG/image_1938559051527214995316.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_218/101143651_1527215046707qYg0d_JPEG/image_1938559051527214995316.jpg?type=w860" width="860" height="238" data-attachment-id="I9pmzNCxNWac2LNBS4fPfb3LDmYc" alt=""> </a>
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
                 <!-- SE3-TEXT { -->300ml * 6병 / 11도
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_21/101143651_1527215169459pyH52_JPEG/image_7802716351527215068168.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_21/101143651_1527215169459pyH52_JPEG/image_7802716351527215068168.jpg?type=w860" width="860" height="621" data-attachment-id="Iv3xQvHpLGE1JpqIeqcyd2R9M_xU" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>물 좋고 공기 맑은 깨끗한 광양의 백운산 줄기에서 물맛이 곧 술맛이라는 생각으로<br></span><span>전통방법 그대로 술을 빚는 백운주가의 백운 복분자 와인은<br></span><span>풍부한 일조량으로 자란 검붉은 복분자의 맛과 향을 기대로 담아 깊은 감칠맛을 자랑합니다.<br></span><span><br></span><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_278/101143651_1527215168802WvOE2_JPEG/image_9569028651527215068168.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_278/101143651_1527215168802WvOE2_JPEG/image_9569028651527215068168.jpg?type=w860" width="860" height="224" data-attachment-id="IO_FZce5xGRO2ss4xyBO1-M5R2dA" alt=""> </a>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->누가 생산하나요?
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
             <div class="se_viewArea" style="max-width:474px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_3_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_237/101143651_1527214629258Ps7QC_JPEG/image_8710684911527214149653.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_237/101143651_1527214629258Ps7QC_JPEG/image_8710684911527214149653.jpg?type=w860" width="474" height="433" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가의 최창석 대표</span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_4_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_36/101143651_1527214629329ApvJQ_JPEG/image_8054668571527214190203.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_36/101143651_1527214629329ApvJQ_JPEG/image_8054668571527214190203.jpg?type=w860" width="860" height="368" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_5_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_272/101143651_1527214629396sddGS_JPEG/image_5860407211527214190204.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_272/101143651_1527214629396sddGS_JPEG/image_5860407211527214190204.jpg?type=w860" width="860" height="917" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가의 연혁 및 수상경력</span>
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
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);">안녕하세요. 저희 백운주가는 2005년 솔잎 조은술로 시작하여<br></span><span style="color: rgb(0, 0, 0);">현재까지 다양한 제품의 전통주를 연구 개발해오고 있습니다.<br></span><span style="color: rgb(0, 0, 0);"><br></span><span style="color: rgb(0, 0, 0);">또한 매년 우리술 품평회 등을 통해 백운주가의 맛과 향, 그리고 품질이 우수한 전통주를 알리고자 노력하고 있으며,<br></span><span style="color: rgb(0, 0, 0);">언제나 좋은 품질의 제품을 전해드리고자 최선을 다하고 있습니다.</span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->어디서 생산하나요?
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_map default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea" id="SEDOC-1527226780964-2090553973_map_0" data-attachment-id="McS4gK-B6BK82CKlpOUVSVDPuqQ8">
             <div class="se_viewArea">
              <div class="se_mediaArea">
               <img width="100%" src="https://simg.pstatic.net/static.map/image?version=1.1&amp;center=127.619925,35.0421736&amp;level=12&amp;w=700&amp;h=323&amp;baselayer=default&amp;markers=type,default,127.619925,35.0421736">
              <a href="#bSize" style="display:none" target="_blank" class="se_map_link __se_link" data-linktype="map" data-linkdata="{&quot;eventTarget&quot;:&quot;button&quot;,&quot;didSearch&quot;:&quot;true&quot;,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;longitude&quot;:&quot;127.619925&quot;}">지도보기</a></div>
              <div class="se_caption_group is-contact">
               <div class="se_map_article">
                <div class="se_title_area">
                 <div class="se_title">
                  백운주가
                 </div>
                </div>
                <div class="se_address">
                 전라남도 광양시 옥룡면 신재로 946-18
                </div>
               </div>
               <div class="se_info_btn">
                <a class="btn_tel">전화</a>
               </div>
               <a target="_blank" class="se_map_link __se_link" data-linktype="map" data-linkdata="{&quot;eventTarget&quot;:&quot;placeDesc&quot;,&quot;didSearch&quot;:&quot;true&quot;,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;longitude&quot;:&quot;127.619925&quot;}">상세보기</a>
              </div>
              <script type="text/data" id="SEDOC-1527226780964-2090553973_map_0_map_view_link">
                <a onclick="return false;" href="#bSize" style="display:none" target="_blank" class="se_map_link __se_link" data-linktype="map" data-linkdata="{&quot;eventTarget&quot;:&quot;button&quot;,&quot;didSearch&quot;:&quot;true&quot;,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;longitude&quot;:&quot;127.619925&quot;}">지도보기</a>
                </script>
             </div>
            </div>
           </div>
          </div>
          <script type="text/data" class="__se_module_data" data-module="{&quot;data&quot;:{&quot;zoomLevel&quot;:12,&quot;address&quot;:&quot;전라남도 광양시 옥룡면 신재로 946-18&quot;,&quot;resv&quot;:false,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;searchType&quot;:&quot;S&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;query&quot;:&quot;백운주가&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;viewId&quot;:&quot;SEDOC-1527226780964-2090553973_map_0&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;tel&quot;:true,&quot;longitude&quot;:&quot;127.619925&quot;},&quot;id&quot;:&quot;SEDOC-1527226780964-2090553973_map_0&quot;,&quot;type&quot;:&quot;v1_map&quot;,&quot;docVersion&quot;:&quot;1.0&quot;}"></script>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:750px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_6_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_24/101143651_1527214629512MNw3O_JPEG/image_7902706591527214412879.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_24/101143651_1527214629512MNw3O_JPEG/image_7902706591527214412879.jpg?type=w860" width="750" height="340" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가 1공장 전경</span>
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
                 <!-- SE3-TEXT { -->&nbsp;
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:726px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_7_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_121/101143651_1527214629592xU4ff_JPEG/%C1%A6%B8%F1_%BE%F8%C0%BD-4.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_121/101143651_1527214629592xU4ff_JPEG/%C1%A6%B8%F1_%BE%F8%C0%BD-4.jpg?type=w860" width="726" height="401" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가의 생산 설비</span>
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
                 <!-- SE3-TEXT { --><span>저희 백운주가는 백두대간에서 갈라져 나와 호남벌을 힘차게 뻗어내리는 호남정맥을 완성하는 명산 백운산 자락에 위치하여<br></span><span>백운산의 맑고 깨끗한 물로 과학적인 검증으로 차별화 된 공정을 통해<br></span><span>더욱 깊이 있는 우리 전통주를 생산하고 있습니다.</span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->어떤 특징이 있나요?
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->저온 숙성으로 복분자의 맛과 향이 그대로 살아있습니다.
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_80/101143651_15272265709257S0VN_JPEG/image_5156869131527226535076.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_80/101143651_15272265709257S0VN_JPEG/image_5156869131527226535076.jpg?type=w860" width="860" height="1042" data-attachment-id="I5nL9R_Nx_hcmLAAjgXN9c_9oUs4" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->100% 국내산 복분자로 빚어 빛깔이 영롱하고 아름답습니다.
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
             <div class="se_viewArea" style="max-width:804px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_1/101143651_1527226721779qeLWB_JPEG/image_6486448791527226684655.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_1/101143651_1527226721779qeLWB_JPEG/image_6486448791527226684655.jpg?type=w860" width="804" height="415" data-attachment-id="IbfWLvsQpcFd7pAjL0HYFsaQMgPc" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->과하지 않고 은은한 단맛이 감칠맛을 한층 더 살려줍니다.
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
             <div class="se_viewArea" style="max-width:818px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_298/101143651_152722664487016LeO_JPEG/image_515023471527226599773.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_298/101143651_152722664487016LeO_JPEG/image_515023471527226599773.jpg?type=w860" width="818" height="553" data-attachment-id="I91cTu2ky1OB4wLw9tmqlFsCHy5Q" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>백운주가의 백운 복분자 와인은<br></span><span>제철의 복분자를 이용하여 저온 장기 휴면 발효공법으로 생산한 전통주입니다.<br></span><span>저온 숙성으로 복분자 본연의 맛과 향이 향긋하게 살아있어 잡냄새가 없고 깊은 감칠맛이 일품입니다.</span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->복분자 와인을 더 맛있게 드시는 방법
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_11_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_156/101143651_1527215488876IlMN1_JPEG/image_3383914961527215462172.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_156/101143651_1527215488876IlMN1_JPEG/image_3383914961527215462172.jpg?type=w860" width="860" height="750" data-attachment-id="Iva86GK1YJfO5KkcFpuLsBBX9lMs" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>드시기 전 냉장고에 차갑게 보관하시거나 얼음을 넣어 드셔보세요.<br></span><span>향긋하고 달콤한 복분자 와인을 즐기실 수 있습니다.</span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->어떻게 배송되나요?
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_12_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_258/101143651_1527215566947Pdhyd_JPEG/image_6903940051527215525042.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_258/101143651_1527215566947Pdhyd_JPEG/image_6903940051527215525042.jpg?type=w860" width="860" height="660" data-attachment-id="Ibrj_flr5I_WbDxS-QgyIGRk-Bbw" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_13_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_128/101143651_1527215585372qpGJ0_JPEG/image_1285859981527215525043.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_128/101143651_1527215585372qpGJ0_JPEG/image_1285859981527215525043.jpg?type=w860" width="860" height="810" data-attachment-id="IN7pCmjvIB5_IaU1FwiDzx20Wwj0" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>배송 중 파손되지 않도록 한 병 한 병 완충제로 꼼꼼하게 포장하여 보내드립니다.<br></span><span><br></span><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line4">
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
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226780964-2090553973_image_14_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_27/101143651_1527215668021AMBIu_JPEG/image_9094843341527215640270.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226780964-2090553973_image_14_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_27/101143651_1527215668021AMBIu_JPEG/image_9094843341527215640270.jpg?type=w860" width="860" height="603" data-attachment-id="I9bsehZV8bZIXIEqxGN_sOFRC_fE" alt=""> </a>
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
        },
        {
          id: 5,
          image: "/baekwoon-daenamoo.jpg",
          price: 19000,
          companyName: "백운주가",
          productName: "대나무술",
          category: "약주",
          ingredient: "쌀",
          makeTimes: "이양주",
          volume: 375,
          rate: 4,
          alcohol: 11,
          sweet: 1,
          bitter: 3,
          sour: 1,
          aroma: 3,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_0_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_79/101143651_1527216087405L0KAx_JPEG/image_4756316751527216045343.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_79/101143651_1527216087405L0KAx_JPEG/image_4756316751527216045343.jpg?type=w860" width="860" height="234" data-attachment-id="Ib6xWlsLuabdCYAxHALvscRhiwFQ" alt=""> </a>
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
                 <!-- SE3-TEXT { -->375ml * 6병 / 11도
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_131/101143651_1527216158447MRGaL_JPEG/image_1844842531527216129736.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_131/101143651_1527216158447MRGaL_JPEG/image_1844842531527216129736.jpg?type=w860" width="860" height="628" data-attachment-id="ILaYE8R7ZXlDiB8A0e_mo-OnjVDM" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>물 좋고 공기 맑은 깨끗한 광양의 백운산 줄기에서 물맛이 곧 술맛이라는 생각으로<br></span><span>전통방법 그대로 술을 빚는 백은주가의 대나무술은<br></span><span>대나무 특유의 그윽한 향과 부드러운 맛이 잘 어우러진 우리나라 고유의 약주입니다.<br></span><span><br></span><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_180/101143651_1527216300960q5XOX_JPEG/image_9747777611527216248482.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_180/101143651_1527216300960q5XOX_JPEG/image_9747777611527216248482.jpg?type=w860" width="860" height="225" data-attachment-id="IyKzeQq044SGj3JlHxwk8xB5MaRY" alt=""> </a>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->누가 생산하나요?
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
             <div class="se_viewArea" style="max-width:474px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_3_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_237/101143651_1527214629258Ps7QC_JPEG/image_8710684911527214149653.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_237/101143651_1527214629258Ps7QC_JPEG/image_8710684911527214149653.jpg?type=w860" width="474" height="433" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가의 최창석 대표</span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_4_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_36/101143651_1527214629329ApvJQ_JPEG/image_8054668571527214190203.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_36/101143651_1527214629329ApvJQ_JPEG/image_8054668571527214190203.jpg?type=w860" width="860" height="368" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_5_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_272/101143651_1527214629396sddGS_JPEG/image_5860407211527214190204.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_272/101143651_1527214629396sddGS_JPEG/image_5860407211527214190204.jpg?type=w860" width="860" height="917" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가의 연혁 및 수상경력</span>
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
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);">안녕하세요. 저희 백운주가는 2005년 솔잎 조은술로 시작하여<br></span><span style="color: rgb(0, 0, 0);">현재까지 다양한 제품의 전통주를 연구 개발해오고 있습니다.<br></span><span style="color: rgb(0, 0, 0);"><br></span><span style="color: rgb(0, 0, 0);">또한 매년 우리술 품평회 등을 통해 백운주가의 맛과 향, 그리고 품질이 우수한 전통주를 알리고자 노력하고 있으며,<br></span><span style="color: rgb(0, 0, 0);">언제나 좋은 품질의 제품을 전해드리고자 최선을 다하고 있습니다.</span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->어디서 생산하나요?
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_map default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea" id="SEDOC-1527226479861-1329535160_map_0" data-attachment-id="McS4gK-B6BK82CKlpOUVSVDPuqQ8">
             <div class="se_viewArea">
              <div class="se_mediaArea">
               <img width="100%" src="https://simg.pstatic.net/static.map/image?version=1.1&amp;center=127.619925,35.0421736&amp;level=12&amp;w=700&amp;h=323&amp;baselayer=default&amp;markers=type,default,127.619925,35.0421736">
              <a href="#bSize" style="display:none" target="_blank" class="se_map_link __se_link" data-linktype="map" data-linkdata="{&quot;eventTarget&quot;:&quot;button&quot;,&quot;didSearch&quot;:&quot;true&quot;,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;longitude&quot;:&quot;127.619925&quot;}">지도보기</a></div>
              <div class="se_caption_group is-contact">
               <div class="se_map_article">
                <div class="se_title_area">
                 <div class="se_title">
                  백운주가
                 </div>
                </div>
                <div class="se_address">
                 전라남도 광양시 옥룡면 신재로 946-18
                </div>
               </div>
               <div class="se_info_btn">
                <a class="btn_tel">전화</a>
               </div>
               <a target="_blank" class="se_map_link __se_link" data-linktype="map" data-linkdata="{&quot;eventTarget&quot;:&quot;placeDesc&quot;,&quot;didSearch&quot;:&quot;true&quot;,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;longitude&quot;:&quot;127.619925&quot;}">상세보기</a>
              </div>
              <script type="text/data" id="SEDOC-1527226479861-1329535160_map_0_map_view_link">
                <a onclick="return false;" href="#bSize" style="display:none" target="_blank" class="se_map_link __se_link" data-linktype="map" data-linkdata="{&quot;eventTarget&quot;:&quot;button&quot;,&quot;didSearch&quot;:&quot;true&quot;,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;longitude&quot;:&quot;127.619925&quot;}">지도보기</a>
                </script>
             </div>
            </div>
           </div>
          </div>
          <script type="text/data" class="__se_module_data" data-module="{&quot;data&quot;:{&quot;zoomLevel&quot;:12,&quot;address&quot;:&quot;전라남도 광양시 옥룡면 신재로 946-18&quot;,&quot;resv&quot;:false,&quot;searchEngine&quot;:&quot;NAVER&quot;,&quot;searchType&quot;:&quot;S&quot;,&quot;latitude&quot;:&quot;35.0421736&quot;,&quot;query&quot;:&quot;백운주가&quot;,&quot;markerLongitude&quot;:&quot;127.619925&quot;,&quot;title&quot;:&quot;백운주가&quot;,&quot;viewId&quot;:&quot;SEDOC-1527226479861-1329535160_map_0&quot;,&quot;locationId&quot;:&quot;37615582&quot;,&quot;markerLatitude&quot;:&quot;35.0421736&quot;,&quot;tel&quot;:true,&quot;longitude&quot;:&quot;127.619925&quot;},&quot;id&quot;:&quot;SEDOC-1527226479861-1329535160_map_0&quot;,&quot;type&quot;:&quot;v1_map&quot;,&quot;docVersion&quot;:&quot;1.0&quot;}"></script>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:750px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_6_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_24/101143651_1527214629512MNw3O_JPEG/image_7902706591527214412879.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_24/101143651_1527214629512MNw3O_JPEG/image_7902706591527214412879.jpg?type=w860" width="750" height="340" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가 1공장 전경</span>
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
                 <!-- SE3-TEXT { -->&nbsp;
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:726px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_7_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180525_121/101143651_1527214629592xU4ff_JPEG/%C1%A6%B8%F1_%BE%F8%C0%BD-4.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_121/101143651_1527214629592xU4ff_JPEG/%C1%A6%B8%F1_%BE%F8%C0%BD-4.jpg?type=w860" width="726" height="401" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">백운주가의 생산 설비</span>
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
                 <!-- SE3-TEXT { --><span>저희 백운주가는 백두대간에서 갈라져 나와 호남벌을 힘차게 뻗어내리는 호남정맥을 완성하는 명산 백운산 자락에 위치하여<br></span><span>백운산의 맑고 깨끗한 물로 과학적인 검증으로 차별화 된 공정을 통해<br></span><span>더욱 깊이 있는 우리 전통주를 생산하고 있습니다.</span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->어떤 특징이 있나요?
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->저온 숙성으로 대잎의 맛과 향이 그대로 살아있습니다.
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_109/101143651_1527226258472T1rV0_JPEG/image_9031231621527226206569.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_109/101143651_1527226258472T1rV0_JPEG/image_9031231621527226206569.jpg?type=w860" width="860" height="1044" data-attachment-id="IAsi-xM-kBdTa_TvXiz9gwcYAsmI" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->잡냄새가 없어 목넘김이 깔끔하고 부드럽습니다.
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
             <div class="se_viewArea" style="max-width:824px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_296/101143651_1527226359559adKsH_JPEG/image_872514051527226295891.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_296/101143651_1527226359559adKsH_JPEG/image_872514051527226295891.jpg?type=w860" width="824" height="551" data-attachment-id="IqevN8UFsa0AO5ixwI9CrIpS15f4" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->대나무의 은은한 향이 감칠맛을 한층 더 살려줍니다.
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_195/101143651_1527226359034TQny0_JPEG/image_7273644101527226295892.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_195/101143651_1527226359034TQny0_JPEG/image_7273644101527226295892.jpg?type=w860" width="860" height="982" data-attachment-id="IsLByMr4pQJlxy3LlJyMwSGtvwOE" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>백운주가의 대나무술은<br></span><span>진한 향을 머금은 대나무를 이용하여 저온 장기 휴면 발효공법으로 생산한 전통주입니다.<br></span><span>저온 숙성으로 잡냄새가 없어 목넘김이 깔끔하며, 대나무의 은은한 향과 진한 감칠맛이 일품입니다.<br></span><span></span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->대나무술을 더 맛있게 드시는 방법
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_11_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_100/101143651_1527216596458ECAkM_JPEG/image_1550597651527216568396.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_100/101143651_1527216596458ECAkM_JPEG/image_1550597651527216568396.jpg?type=w860" width="860" height="664" data-attachment-id="ILMs9ZdL7Z40iM9bWHr79SkPFy-c" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>드시기 전 냉장고에 차갑게 보관하시거나 얼음을 넣어 드셔보세요.<br></span><span>대잎의 은은한 향을 더욱 깔끔하게 즐기실 수 있습니다.<br></span><span></span>
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
             <div class="se_viewArea se_fs_T1">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->어떻게 배송되나요?
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
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_12_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_262/101143651_1527216744181NekwA_JPEG/image_2793696671527216678724.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_262/101143651_1527216744181NekwA_JPEG/image_2793696671527216678724.jpg?type=w860" width="860" height="654" data-attachment-id="Itb5uPatvzFaX-Ng-Y4EzfzNhl1k" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_13_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_1/101143651_1527216757696o1C3K_JPEG/image_9643507631527216678725.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_1/101143651_1527216757696o1C3K_JPEG/image_9643507631527216678725.jpg?type=w860" width="860" height="810" data-attachment-id="I45tqm5Gq1qqVQPdrXKlHErea1SI" alt=""> </a>
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
                 <!-- SE3-TEXT { -->배송 중 파손되지 않도록 한 병 한 병 완충제로 꼼꼼히 포장하여 보내드립니다.
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_horizontalLine line4">
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
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527226479861-1329535160_image_14_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180525_136/101143651_1527216830817XL1mM_JPEG/image_8702838741527216803344.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527226479861-1329535160_image_14_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180525_136/101143651_1527216830817XL1mM_JPEG/image_8702838741527216803344.jpg?type=w860" width="860" height="603" data-attachment-id="IxD4hhy3WjgLOKKgau7LCNaYMsVM" alt=""> </a>
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
                 <!-- SE3-TEXT { -->
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
          id: 6,
          image: "/andongsoju.jpg",
          price: 45000,
          companyName: "명인안동소주",
          productName: "박재서 안동소주",
          category: "증류주",
          ingredient: "쌀",
          makeTimes: "삼양주 이상",
          volume: 400,
          rate: 5,
          alcohol: 45,
          sweet: 1,
          bitter: 5,
          sour: 2,
          aroma: 5,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H1 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h4 class="se_textarea">
                 <!-- SE3-TEXT { -->박재서 안동소주
                 <!-- } SE3-TEXT --></h4>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H3 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h6 class="se_textarea">
                 <!-- SE3-TEXT { -->화학첨가물 없이 국내산 쌀 100%로 만들어 <br>깔끔하고 뒤끝 없는 특별한 소주 !
                 <!-- } SE3-TEXT --></h6>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_0_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170831_30/100898747_150417248701624qsn_JPEG/%C8%A3%B8%AE%BA%B4_%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170831_30/100898747_150417248701624qsn_JPEG/%C8%A3%B8%AE%BA%B4_%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6.jpg?type=w860" width="1000" height="1000" data-attachment-id="IyQxZyA3vBWrd-w1XPWMOvb2PF98" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">호리병 400ml+400ml </span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_204/100898747_1501665781301DR61B_GIF/%C8%A3%B8%AE%BA%B4.mp4_000001808.gif&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_204/100898747_1501665781301DR61B_GIF/%C8%A3%B8%AE%BA%B4.mp4_000001808.gif" width="824" height="465" data-attachment-id="IneY1-GQVW16Qe_5hpgoewG2HGXc" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->01 <br>누가생산하나요?
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
                 <!-- SE3-TEXT { -->명인안동소주, 박재서 명인
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span>안녕하세요. 대한민국 식품명인 제 6호 박재서입니다.&nbsp;</span><span>저희는 오랜 전통의 맛과 향을 여러분께 전해드리기 위해 우수한 경험과 기술력을 바탕으로 정통 안동소주의&nbsp;</span><span>맛과 품질을 지닌 제품을 생산해 왔으며, 앞으로도 모두에게 사랑받는 제품으로 여러분의 성원에 보답할 것을&nbsp;약속드립니다.<br></span><span><br></span><span>또한, 대한민국을 대표하는 세계적인 명주로 우리나라의 위상을 세계에 드높여 우리민족의 우수성을 세계에 펼칠 것입니다. 대한민국의 명인으로서 보다 많은 분들께 우리 고유의 전통의 맛과 향을&nbsp;전해 드리는 것을 사명으로 삼겠습니다. 감사합니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170803_44/100898747_1501749575359Ay1lo_JPEG/%B9%DA%C0%E7%BC%AD%B8%ED%C0%CE2.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170803_44/100898747_1501749575359Ay1lo_JPEG/%B9%DA%C0%E7%BC%AD%B8%ED%C0%CE2.jpg?type=w860" width="860" height="646" data-attachment-id="IXrM0rJxCZSZ6ZMx3Jl7-Zd2m6Ck" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->02 <br>어디서 생산하나요?
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
                 <!-- SE3-TEXT { -->경북 안동
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->700여년 전 원나라의 병참기지가 안동에 세워지면서 현재의 안동소주 제조기법이 전해졌습니다. 이후 500여년전 조선명조 안동의 명문가인 은곡 박진선생의 반남박씨 가문에서 가양주로 빚어오던 안동소주 제조비법을 25대손인 박재서 명인이 계승 발전시켜 현재까지 이어져 내려오고 있습니다.
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_251/100898747_1501645408461HmqRJ_JPEG/%BB%FD%BB%EA%C1%F6.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_251/100898747_1501645408461HmqRJ_JPEG/%BB%FD%BB%EA%C1%F6.jpg?type=w860" width="860" height="646" data-attachment-id="ILHcnJsXL24bAtWTVwfisXbfKQiw" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">명인 안동소주 양조장 전경 </span>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->03 <br>박재서님의 안동소주는 어떻게 달라요?
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
                 <!-- SE3-TEXT { -->안동소주대란의 주인공 !
                 <br>깔끔하고 뒤끝 없는 특별한 경험을 선사합니다
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->안동소주의 가장 큰 특징은 역한 알콜향이 없고 잘 정제된 향긋한 곡주향만이 있어 누구나 편하게 드실 수 있습니다. 마신 후 입안 가득 향이 퍼지며 연기처럼 사라지는 화사함이 있고 아랫배에서 올라오는 뜨거운 기운으로 마실수록 기분이 좋아지는 매력있는 소주입니다. 2014년에는 인터넷 커뮤니티에서 안동소주의 시음후기가 시발점이 되어 젊은층들 사이에서 빠르게 입소문이 퍼져나가 품귀현상이 일어나는 등 안동소주대란이 발생하여 현재까지도 그 인기가 이어지고 있는데요. <b>네이버에서 "안동소주대란"을 검색해서 그 인기를 실감해보세요!</b>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_4_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_50/100898747_1501659200324pYUaW_JPEG/%C8%A3%B8%AE%BA%B42.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_50/100898747_1501659200324pYUaW_JPEG/%C8%A3%B8%AE%BA%B42.jpg?type=w860" width="860" height="646" data-attachment-id="IeBLEN4dtfO6mstoZMMGdFwdV8QE" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea"> </span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_5_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_198/100898747_1501659298363MfdTf_JPEG/%C8%A3%B8%AE%BA%B44.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_198/100898747_1501659298363MfdTf_JPEG/%C8%A3%B8%AE%BA%B44.jpg?type=w860" width="860" height="646" data-attachment-id="ISkRjJ4Kcs1K5XqMPBY0tyRHB7NY" alt=""> </a>
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
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->국내산 쌀 100%로 만든 정통 증류식 소주
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->역사적으로 안동소주는 양반들이 즐겨하는 고급술로서 독하면서 깊은 맛과 향을 간직하고 있어 대단한 인기를 누렸습니다. 명인 안동소주는 흔히 우리가 먹는 알콜향이 강한 희석식소주(95% 알코올인 주정에 물을 희석하고 첨가물을 넣은 소주 - 화학주)와는 다르게 <b>쌀 100%로 발효 및 증류해서 한방울 한방울 떨어져 모은 것으로 만들어져 화학첨가물이 전혀 없습니다.</b>&nbsp;<span>정통 증류식 소주로서 맛뿐 아니라 건강을 먼저 생각하며 만들어내고 있습니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_6_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_136/100898747_1501645814749L0c1s_JPEG/%BD%D2.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_136/100898747_1501645814749L0c1s_JPEG/%BD%D2.jpg?type=w860" width="860" height="646" data-attachment-id="IyhmP4bCj9u6oc0_7FomTuu0VXNU" alt=""> </a>
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
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->일반 안동소주와 박재서 명인 안동소주가 다른 이유
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->박재서 명인의 안동소주는 일반 안동소주의 2단 방식과는 달리 청주를 한번 더 발효시켜 3단 사입으로 증류했을 뿐 아니라 증류한 술을 <b>100일 이상 숙성을 하여 화근내가 없고 은은한 향과 부드러운 술맛</b>을 자랑합니다.&nbsp;<span style="color: rgb(0, 0, 0);">소주의 새로운 경험을 선사하는 저희 박재서 명인 안동소주는 나이와 상관없이 많은 분들로부터 사랑받고 있습니다.&nbsp;</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_7_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_289/100898747_15016523579866SSts_JPEG/%B9%DA%C0%E7%BC%AD%B8%ED%C0%CE.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_289/100898747_15016523579866SSts_JPEG/%B9%DA%C0%E7%BC%AD%B8%ED%C0%CE.jpg?type=w860" width="860" height="646" data-attachment-id="IOaIm9B8O7gITsC_e9trwUwsmXdk" alt=""> </a>
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
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->700년 전통의 대한민국 명주
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="color: rgb(0, 0, 0);"></span>안동소주는&nbsp;고려시대부터&nbsp;전승되어&nbsp;온&nbsp;700년&nbsp;전통의&nbsp;우리나라&nbsp;3대&nbsp;명주&nbsp;중&nbsp; 하나로&nbsp;안동지방의&nbsp;좋은&nbsp;물과&nbsp;쌀로&nbsp;빚어&nbsp;오랜&nbsp;기간&nbsp;숙성시킨&nbsp;순곡&nbsp;증류주입니다. 저희&nbsp;명인안동소주는&nbsp;그&nbsp;맥을&nbsp;이어오기&nbsp;위해&nbsp;부단히&nbsp;노력하고&nbsp;있으며&nbsp;<b>대한민국 우리술&nbsp;품평회&nbsp;대상</b>을&nbsp;수상하는&nbsp;등&nbsp;국내외에서&nbsp; 가장&nbsp;인정받는&nbsp;우리나라&nbsp;전통주로&nbsp;자리매김하고&nbsp;있습니다.<span style="color: rgb(0, 0, 0);"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20171215_145/100898747_1513322514432OxyEl_JPEG/%C8%A3%B8%AE%BA%B4-%BC%F6%BB%F3%B3%BB%BF%AA.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171215_145/100898747_1513322514432OxyEl_JPEG/%C8%A3%B8%AE%BA%B4-%BC%F6%BB%F3%B3%BB%BF%AA.jpg?type=w860" width="860" height="1000" data-attachment-id="ILIYMKFbV2qqPyW_0GrrXXalOMOg" alt=""> </a>
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
          <div class="se_component se_quotation quotation_line">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->안동소주 유일의 찾아가는 양조장
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->농림축산식품부&nbsp;지정&nbsp;‘찾아가는&nbsp;양조장’은&nbsp;역사가&nbsp;살아있는&nbsp;양조장&nbsp;문화의&nbsp; 복원을&nbsp;통해&nbsp;우리&nbsp;술의&nbsp;진정한&nbsp;모습을&nbsp;찾아내고자&nbsp;시작되었습니다.&nbsp;저희&nbsp; 명인&nbsp;안동소주는&nbsp;안동소주&nbsp;유일의&nbsp;찾아가는&nbsp;양조장을&nbsp;운영하고&nbsp;있으며 안동소주의&nbsp;유래,&nbsp;특징,&nbsp;제조방법에&nbsp;대하여&nbsp;상세히&nbsp;안내드리고&nbsp;있습니다.&nbsp; 안동지역에&nbsp;오시면&nbsp;꼭&nbsp;한번&nbsp;방문하셔서&nbsp;체험해보셨으면&nbsp;합니다.
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_194/100898747_150164587644124Byv_JPEG/%C3%A3%BE%C6%B0%A1%B4%C2%BE%E7%C1%B6%C0%E5.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_194/100898747_150164587644124Byv_JPEG/%C3%A3%BE%C6%B0%A1%B4%C2%BE%E7%C1%B6%C0%E5.jpg?type=w860" width="860" height="646" data-attachment-id="Ii0h2W3IUqxnWgZJ2dUpKfoZ1k0I" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">일본인 관광객 명인 안동소주 체험</span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_imageStrip imageStrip2 default ">
           <div class="se_sectionArea se_align-extend">
            <div class="se_viewArea">
             <div class="se_editArea">
              <div class="se_imageStripView">
               <div class="se_mediaArea">
                <div class="se_imageStripArea" style="width:50.0%;">
                 <a href="#" onclick="return false;" class="__se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;_img_0&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20170802_161/100898747_15016458835853TDat_JPEG/%C3%A3%BE%C6%B0%A1%B4%C2%BE%E7%C1%B6%C0%E52.jpg&quot;}"> <img alt="" class="se_mediaImage __se_img_el" data-attachment-id="Ii4LHANmmyyZdyNq_y5S4dwAk9og" src="https://shop-phinf.pstatic.net/20170802_161/100898747_15016458835853TDat_JPEG/%C3%A3%BE%C6%B0%A1%B4%C2%BE%E7%C1%B6%C0%E52.jpg?type=w860" id="_img_0"> </a>
                </div>
                <div class="se_imageStripArea" style="width:50.0%;">
                 <a href="#" onclick="return false;" class="__se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;_img_1&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20170802_7/100898747_1501645896764gmK8D_JPEG/%C3%A3%BE%C6%B0%A1%B4%C2%BE%E7%C1%B6%C0%E53.jpg&quot;}"> <img alt="" class="se_mediaImage __se_img_el" data-attachment-id="IayXSQ55l1aJcg5ZROnpLLhrH4FE" src="https://shop-phinf.pstatic.net/20170802_7/100898747_1501645896764gmK8D_JPEG/%C3%A3%BE%C6%B0%A1%B4%C2%BE%E7%C1%B6%C0%E53.jpg?type=w860" id="_img_1"> </a>
                </div>
               </div>
               <div class="se_editView">
                <div class="se_textView se_mediaCaption">
                 <span class="se_textarea">안동소주 역사 박물관</span>
                </div>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->04 <br>맛있게 먹는 법은요?
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
                 <!-- SE3-TEXT { -->안동소주와 잘어울리는 안주
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->안동소주는 은은한 향과 깔끔한 맛으로 어떤 요리에도 어울리는데요. 특히 신선하고 쫄깃한 문어숙회, 탱탱한 식감이 좋은 새우, 기름지고 고소한 식감이 있는 동태전과 같은 전류 그리고 육즙이 풍부한 소고기 류와 그 맛이 가장 조화롭게 어우러집니다.&nbsp;
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_279/100898747_1501659813344sFrSc_JPEG/%B7%B9%BD%C3%C7%C7.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_279/100898747_1501659813344sFrSc_JPEG/%B7%B9%BD%C3%C7%C7.jpg?type=w860" width="860" height="646" data-attachment-id="IdrPP3AYfNtu_bvPxreyvjdoZeCM" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">소고기구이 &amp; 안동소주</span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_11_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170802_187/100898747_1501646215782X7Jcy_JPEG/%B7%B9%BD%C3%C7%C7.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170802_187/100898747_1501646215782X7Jcy_JPEG/%B7%B9%BD%C3%C7%C7.jpg?type=w860" width="860" height="646" data-attachment-id="INqVVE1RswaObzykYXNsaSxVopnE" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">문어숙회 &amp; 안동소주 </span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_imageStrip imageStrip2 default ">
           <div class="se_sectionArea se_align-extend">
            <div class="se_viewArea">
             <div class="se_editArea">
              <div class="se_imageStripView">
               <div class="se_mediaArea">
                <div class="se_imageStripArea" style="width:50.0%;">
                 <a href="#" onclick="return false;" class="__se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;_img_0&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20170802_189/100898747_150165820736806J90_JPEG/%B7%B9%BD%C3%C7%C72.jpg&quot;}"> <img alt="" class="se_mediaImage __se_img_el" data-attachment-id="IxFXk8DaF68oEAhIRVY4V_ind7So" src="https://shop-phinf.pstatic.net/20170802_189/100898747_150165820736806J90_JPEG/%B7%B9%BD%C3%C7%C72.jpg?type=w860" id="_img_0"> </a>
                </div>
                <div class="se_imageStripArea" style="width:50.0%;">
                 <a href="#" onclick="return false;" class="__se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;_img_1&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20170802_42/100898747_1501658469486v0HAN_JPEG/%B7%B9%BD%C3%C7%C73.jpg&quot;}"> <img alt="" class="se_mediaImage __se_img_el" data-attachment-id="I45pPSMcdvFdb2LEVoITtCWt9YoY" src="https://shop-phinf.pstatic.net/20170802_42/100898747_1501658469486v0HAN_JPEG/%B7%B9%BD%C3%C7%C73.jpg?type=w860" id="_img_1"> </a>
                </div>
               </div>
               <div class="se_editView">
                <div class="se_textView se_mediaCaption">
                 <span class="se_textarea">칵테일 새우 &amp; 안동소주</span>
                </div>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 se_fw_bold" style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->05 <br>어떻게 배송되나요?
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
                 <!-- SE3-TEXT { -->평일 12시 (정오) 이전 주문 건 당일출고
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-justify">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { -->안동소주 호리병 400ml+400ml를&nbsp;고급스러운 선물용 박스에 넣어 안전하게 보내드리고 있습니다. 주문량이 많을 경우 배송이 1~2일 지연될 수 있사오니 이점은 &nbsp;참고해주세요.
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1519951674024--1465600861_image_12_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20170831_144/100898747_1504172446919h8O6v_JPEG/%C8%A3%B8%AE%BA%B4400ml%2B400ml.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1519951674024--1465600861_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20170831_144/100898747_1504172446919h8O6v_JPEG/%C8%A3%B8%AE%BA%B4400ml%2B400ml.jpg?type=w860" width="860" height="560" data-attachment-id="IhaCnefTua9pmT_UJVNuAfTRqjx0" alt=""> </a>
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
                 <!-- SE3-TEXT { -->제품 구성 및 표기사항
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
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->품명 : 안동소주 호리병 400ml+400ml (45%)
                 <br>식품의 유형 : 소주
                 <br>생산지 : 명인안동소주 (경북 안동시 풍산읍 산업단지 6길 6)
                 <br>에탄올 함량 : 45%
                 <br>내용량 : 400ml+400ml
                 <br>보관방법 : 직사광선을 피하고 서늘한 곳에 보관
                 <br>원재료 및 함량 : 국내산 쌀 100%
                 <br>유의사항 : 지나친 음주는 뇌졸중, 기억력손상이나 치매를 유발합니다.
                 <!-- } SE3-TEXT -->
                </blockquote>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>`
        },
        {
          id: 7,
          image: "/geumjeong.jpg",
          price: 15960,
          companyName: "금정산성토산주",
          productName: "금정산성막걸리",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 750,
          rate: 5,
          alcohol: 8,
          sweet: 4,
          bitter: 2,
          sour: 3,
          aroma: 3,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_0_img&quot;,&quot;src&quot;:&quot;http://ai.esmplus.com/iop12453/common/popup.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_0_img" class="se_mediaImage __se_img_el" src="http://ai.esmplus.com/iop12453/common/popup.jpg" width="860" height="629" data-attachment-id="" alt=""> </a>
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:80px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_1_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171018_33/100934831_15083041863001Yt1D_JPEG/a1.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171018_33/100934831_15083041863001Yt1D_JPEG/a1.jpg?type=w860" width="80" height="48" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->식품명인49호 유청길명인 금정산성막걸리 8도 750ml * 6병
                 <!-- } SE3-TEXT --></h5>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-center">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2">상품구성&nbsp;/&nbsp;식품명인49호&nbsp;유청길명인&nbsp;금정산성막걸리&nbsp;8도&nbsp;750ml&nbsp;*&nbsp;6병</span><span class="se_fs_T2"><br></span><span class="se_fs_T2"></span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_241/101206736_1527119792228ilV5D_JPEG/pro_01.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_241/101206736_1527119792228ilV5D_JPEG/pro_01.jpg?type=w860" width="860" height="1501" data-attachment-id="I1oL_hJrSoSQlqeiv9cQJaOyVcZY" alt=""> </a>
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
                 <!-- SE3-TEXT { -->식품명인 49호
                 <br>도수&nbsp;/&nbsp;8%
                 <br>용량&nbsp;/&nbsp; 750ml
                 <br>종류&nbsp;/&nbsp;탁주
                 <br>유효기간&nbsp;/&nbsp;제조일로부터 10일(10도이하 냉장보관)
                 <!-- } SE3-TEXT -->
                </blockquote>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->01<br>누가&nbsp;생산하나요
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
                 <!-- SE3-TEXT { -->500년 전통의 금정산성토산주
                 <br>유청길 명인
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span>금정산성토산주는&nbsp;유래가&nbsp;정확하지는&nbsp;않지만&nbsp;조선&nbsp;초기부터&nbsp;금정산성&nbsp;지역의&nbsp;화전민이&nbsp;생계수단으로&nbsp;누룩을&nbsp;빚기&nbsp;시작한데서&nbsp;<br></span><span>비롯되었다고&nbsp;전해지며, 집안&nbsp;대대로&nbsp;내려져오던&nbsp;500년&nbsp;전통의&nbsp;자연산&nbsp;누룩과&nbsp;전통&nbsp;양조&nbsp;방식을&nbsp;그대로&nbsp;지켜고&nbsp;발전시켜&nbsp;체계적이고&nbsp;위생적인&nbsp;생산시스템을&nbsp;구축하였습니다. </span><br><span>우리나라&nbsp;많은&nbsp;막걸리&nbsp;중에서&nbsp;유일하게&nbsp;향토민속주로&nbsp;지정되어&nbsp;있는&nbsp;대한민국&nbsp;민속주&nbsp;1호&nbsp;막걸리로&nbsp;금정산성토산주의&nbsp;유청길&nbsp;<br></span><span>대표는&nbsp;농림축산식품부로부터 2013년&nbsp;12월&nbsp;대한민국&nbsp;최초&nbsp;막걸리분야&nbsp;식품&nbsp;명인으로&nbsp;지정받았습니다.</span><span class="se_fs_T3"></span><span class="se_fs_T2"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_61/101206736_1527119834342zCJcy_JPEG/etc_01.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_61/101206736_1527119834342zCJcy_JPEG/etc_01.jpg?type=w860" width="860" height="624" data-attachment-id="IKxzNlaeKZ_c2to12bDAC1ISyeKw" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->02<br>어디에서&nbsp;생산하나요
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
                 <!-- SE3-TEXT { -->사계절이 모두 아름다운
                 <br>부산 금정산
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span>부산의&nbsp;명소인&nbsp;금정산&nbsp;기슭에&nbsp;자리잡은&nbsp;금정산성마을은&nbsp;금정산(金井山)&nbsp;해발&nbsp;400m의&nbsp;분지에&nbsp;아담히&nbsp;자리잡은&nbsp;산성마을로&nbsp;<br></span><span>해발&nbsp;500~600m&nbsp;높이의&nbsp;금정산&nbsp;능선이 병풍처럼&nbsp;둘러싸고&nbsp;있는&nbsp;아름다운&nbsp;자연환경을&nbsp;갖추고&nbsp;있어&nbsp;휴일이면&nbsp;이곳을&nbsp;찾는&nbsp;<br></span><span>등산객들의&nbsp;발길이&nbsp;끊이지&nbsp;않는&nbsp;곳입니다.&nbsp; </span><br>90%&nbsp;이상&nbsp;녹지로&nbsp;자연&nbsp;그대로의&nbsp;모습을&nbsp;간직하고&nbsp;있으며&nbsp;맑은&nbsp;공기와&nbsp;물로&nbsp;청정&nbsp;자연&nbsp;그대로&nbsp;간직한&nbsp;건강한&nbsp;마을입니다.&nbsp;<span class="se_fs_T3"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_4_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_201/101206736_1527119929369G8iri_JPEG/etc_02.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_201/101206736_1527119929369G8iri_JPEG/etc_02.jpg?type=w860" width="860" height="568" data-attachment-id="IrUCGAkAIQUpQT6oWMHk7cxjxUgM" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->03<br>금정산성막걸리는&nbsp;어떤&nbsp;특징이&nbsp;있나요
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
                 <!-- SE3-TEXT { -->우리의 전통 누룩으로 빚은
                 <br>민속주 1호, 금정산성막걸리
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_5_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_92/101206736_1527119999680cEQeK_JPEG/etc_04.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_92/101206736_1527119999680cEQeK_JPEG/etc_04.jpg?type=w860" width="860" height="572" data-attachment-id="ImjJKuIggoLf60ahh2w2YtL875Sk" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span>우리나라에서&nbsp;유일하게&nbsp;남아있는&nbsp;누룩마을이라고&nbsp;해도&nbsp;과언이&nbsp;아닌&nbsp;부산의&nbsp;금정산성마을의&nbsp;산성누룩은&nbsp;보통의&nbsp;누룩과는&nbsp;<br></span><span>다르게&nbsp;베보자기에&nbsp;싸서&nbsp;발로&nbsp;둥그렇고&nbsp;납작하게&nbsp;딛습니다. </span><br><span>이렇게&nbsp;딛어진&nbsp;누룩은&nbsp;누룩방의&nbsp;선반위에&nbsp;짚을&nbsp;깔고&nbsp;1주&nbsp;정도를&nbsp;열이&nbsp;나게&nbsp;띄워주며&nbsp;물&nbsp;이외에&nbsp;다른&nbsp;원료를&nbsp;첨가하지&nbsp;않은&nbsp;<br></span><span>우리&nbsp;전통&nbsp;누룩입니다.</span><span class="se_fs_T3"></span><span class="se_fs_T3"></span><span class="se_fs_T3"><br></span><span class="se_fs_T3"></span><span class="se_fs_T3"> </span><span class="se_fs_T3"></span><span class="se_fs_T3"><br></span><span class="se_fs_T3"></span><span class="se_fs_T3"></span>금정산성막걸리는&nbsp;술빚기에&nbsp;적합한&nbsp;온도와&nbsp;습도가&nbsp;유지되는&nbsp;해발&nbsp;400m의&nbsp;청정&nbsp;환경을&nbsp;갖춘&nbsp;금정산성마을에서&nbsp;제조됩니다. <br><span>깨끗한&nbsp;자연환경속에서&nbsp;발효된&nbsp;자연산&nbsp;누룩과&nbsp;250m의&nbsp;암반수를&nbsp;사용하여&nbsp;금정산성&nbsp;전통&nbsp;막걸리의&nbsp;맛을&nbsp;그대로&nbsp;느낄&nbsp;수&nbsp;있는<br></span><span>알콜도수&nbsp;8도의&nbsp;100%&nbsp;국내산&nbsp;살아있는&nbsp;쌀막걸리로 누룩&nbsp;질이&nbsp;전국&nbsp;으뜸이며&nbsp;산수로&nbsp;술을&nbsp;빚기&nbsp;때문에&nbsp;은은한&nbsp;향과&nbsp;구수한&nbsp;<br></span><span>맛이&nbsp;일품입니다. </span><br><span>제조&nbsp;공정에서&nbsp;전통&nbsp;양조&nbsp;방식을&nbsp;그대로&nbsp;따라&nbsp;만든&nbsp;발효주로&nbsp;우리나라&nbsp;많은&nbsp;막걸리&nbsp;중에서&nbsp;유일하게&nbsp;향토민속주로&nbsp;지정되어&nbsp;<br></span><span>있는&nbsp;대한민국&nbsp;민속주&nbsp;1호&nbsp;막걸리입니다.</span><span class="se_fs_T3"></span><span class="se_fs_T3"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_6_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_270/101206736_1527120014219XCYaN_JPEG/etc_05.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_270/101206736_1527120014219XCYaN_JPEG/etc_05.jpg?type=w860" width="860" height="572" data-attachment-id="IwjEF30478zM9YS7HxEkHYweKauI" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->04<br>금정산성막걸리를 더 맛있게 먹는 방법
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
                 <!-- SE3-TEXT { -->금정산성막걸리와 어울리는 음식
                 <br>술을 차게 해서 드시면 더욱 좋습니다
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span>금정산성토산주에서&nbsp;제조하는&nbsp;산성막걸리는&nbsp;대부분의&nbsp;막걸리가&nbsp;일본식누룩(입국)을&nbsp;사용하는데&nbsp;비해&nbsp;전통의&nbsp;누룩을&nbsp;사용하기&nbsp;<br></span><span>때문에&nbsp;일반&nbsp;막걸리보다&nbsp;신미가&nbsp;더욱&nbsp;강하며&nbsp;독특한&nbsp;맛으로 마을의&nbsp;또&nbsp;다른&nbsp;명물인&nbsp;염소불고기와&nbsp;잘&nbsp;어울리며&nbsp;피로회복,&nbsp;숙취에&nbsp;좋은&nbsp;도토리묵과도&nbsp;잘어울립니다.&nbsp;&gt;&nbsp;본문3&nbsp;좌측정렬 </span><span class="se_fs_T3"></span><span class="se_fs_T3"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_7_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_132/101206736_1527120059613dIeWX_JPEG/etc_06.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_132/101206736_1527120059613dIeWX_JPEG/etc_06.jpg?type=w860" width="860" height="420" data-attachment-id="IeOGgeraX_0tNVmyO0V-rfocUAKQ" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->05<br>어떻게&nbsp;배송되나요
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
                 <!-- SE3-TEXT { -->당일&nbsp;11시이전&nbsp;주문건까지&nbsp;당일배송됩니다.
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
                 <!-- SE3-TEXT { -->냉장&nbsp;배송되며,&nbsp;당일&nbsp;11시이전&nbsp;결재완료된&nbsp;주문건에&nbsp;한해&nbsp;당일배송&nbsp;됩니다. <br>택배&nbsp;배송&nbsp;중&nbsp;용기가&nbsp;깨졌거나&nbsp;내용물이&nbsp;세어나왔을&nbsp;경우&nbsp;사진을&nbsp;촬영하시고&nbsp;고객&nbsp;센터로&nbsp;전화해주시기&nbsp;바랍니다. <br>(생막걸리의&nbsp;경우&nbsp;배송중&nbsp;많이&nbsp;흔들리거나&nbsp;눕혀질&nbsp;경우&nbsp;내용물이&nbsp;세어나올&nbsp;수&nbsp;있습니다.)
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->상품구성&nbsp;/&nbsp;식품명인49호 유청길명인 금정산성 막걸리
                 <br> 6도 750ml * 6병
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180524_185/101206736_15271200865870sWHP_JPEG/pro_02.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180524_185/101206736_15271200865870sWHP_JPEG/pro_02.jpg?type=w860" width="860" height="2494" data-attachment-id="IADjBopjATVJLhEyXlefCglgOQi8" alt=""> </a>
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1527730179142-1717607655_image_9_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171018_248/100934831_15083041870482pFj6_JPEG/notice.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1527730179142-1717607655_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171018_248/100934831_15083041870482pFj6_JPEG/notice.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
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
        },
        {
          id: 8,
          image: "/redmonkey.jpg",
          price: 26600,
          companyName: "술샘",
          productName: "붉은원숭이",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 375,
          rate: 5,
          alcohol: 11,
          sweet: 3,
          bitter: 3,
          sour: 1,
          aroma: 4,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_0_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171120_52/500060902_1511151194934k3dsM_JPEG/image_6219223101510882927764.jpg&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171120_52/500060902_1511151194934k3dsM_JPEG/image_6219223101510882927764.jpg?type=w860" width="860" height="907" data-attachment-id="IV3tpABC_tWM05tJrw4jMvaV3nOw" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="color: rgb(0, 0, 0); background-color: rgb(255, 212, 167);"><b>붉은원숭이</b></span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(99, 99, 99);">홍국쌀로 만든 프리미엄 살균탁주</span><span class="se_fs_T3" style="color: rgb(99, 99, 99);">&nbsp;</span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_1_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171101_178/500060902_1509473768253hMzg6_JPEG/image_6765425861509468548935.jpg?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171101_178/500060902_1509473768253hMzg6_JPEG/image_6765425861509468548935.jpg?type=w860" width="2024" height="1916" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span>내 청춘, 내 사랑의 뜨거운 번뇌를 1/10로 줄여주는 10.8%의 마법 같은 해결책<br></span><span></span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">· </span><span class="se_fs_T3" style="color: rgb(156, 156, 156);">지역&nbsp;</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">경기도 용인시</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">· </span><span class="se_fs_T3" style="color: rgb(156, 156, 156);">양조장</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 농업회사법인 주식회사 술샘<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">상품</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">명</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 붉은원숭이<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">주종</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;살균탁주 / 살균막걸리<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">용량/도수</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp;375ml / 10.8%</span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T3" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">원재료</span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 국내산 쌀 100% / 홍국쌀 / 정제수<br></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">제조일</span></span></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);"></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp; &nbsp; 주문일로부터 1개월 이내</span><span class="se_fs_T3"><br></span></span><span class="se_fs_T4" style="color: rgb(0, 0, 0);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">유통기한</span></span></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp;</span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">12개월</span></span><br></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);">·<span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp;</span></span></span></span><span class="se_fs_T4" style="color: rgb(156, 156, 156);"><span style="color: rgb(99, 99, 99);"><span style="color: rgb(0, 0, 0);"><span class="se_fs_T3" style="color: rgb(156, 156, 156);">보관방법</span></span></span></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><span style="color: rgb(99, 99, 99);"><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><span style="color: rgb(0, 0, 0);"></span></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">&nbsp; &nbsp; &nbsp;실온</span></span></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"><br></span><span class="se_fs_T4" style="color: rgb(99, 99, 99);"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_2_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171102_234/500060902_1509597920576WSOxJ_PNG/3_1.png?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171102_234/500060902_1509597920576WSOxJ_PNG/3_1.png?type=w860" width="860" height="867" data-attachment-id="" alt=""> </a>
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
              <div id="SEDOC-1512023658857--1651435260_video_0" data-attachment-id="VBX44Ejrj763xi43IEBvK8wWRnUs" class="se_mediaArea"><iframe frameborder="0" title="NaverVideo" scrolling="no" width="579px" height="325.6875px" src="https://serviceapi.nmv.naver.com/view/ugcPlayer.nhn?wmode=opaque&amp;vid=7C5FB493AE4001F64853372C06F0C5DC73D7&amp;inKey=V12550d310998e0fda38792b3e8799dce9e7a1ab1702185270f76e4abbbe72091c3f992b3e8799dce9e7a&amp;hasLink=1&amp;sizeRatio=0" allowfullscreen="" allow="autoplay; encrypted-media"></iframe></div>
             </div>
            </div>
           </div>
          </div>
          <script type="text/data" class="__se_module_data" data-module="{&quot;type&quot;:&quot;v1_video&quot;, &quot;docVersion&quot; : &quot;1.0&quot;, &quot;id&quot; :&quot;SEDOC-1512023658857--1651435260_video_0&quot; , &quot;data&quot; : { &quot;baseElId&quot; : &quot;SEDOC-1512023658857--1651435260_video_0&quot;, &quot;videoType&quot; : &quot;player&quot;, &quot;vid&quot; : &quot;7C5FB493AE4001F64853372C06F0C5DC73D7&quot;, &quot;inkey&quot; : &quot;V12550d310998e0fda38792b3e8799dce9e7a1ab1702185270f76e4abbbe72091c3f992b3e8799dce9e7a&quot;, &quot;width&quot;: &quot;1040&quot;, &quot;height&quot;: &quot;416&quot;, &quot;displayWidth&quot;: &quot;&quot;, &quot;displayHeight&quot;: &quot;&quot;}}"></script>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_3_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171130_179/500060902_1512023634994ThY3d_JPEG/%BC%FA%BB%F9_%C0%CE%C1%F5%B8%B6%C5%A9%284p%29_preview_jpeg.jpg&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_179/500060902_1512023634994ThY3d_JPEG/%BC%FA%BB%F9_%C0%CE%C1%F5%B8%B6%C5%A9%284p%29_preview_jpeg.jpg?type=w860" width="860" height="1757" data-attachment-id="Iie18x9bPvAHfd68Sn9sJoYIUcnE" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_4_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171101_68/500060902_1509473768556jlujO_PNG/810x595_1.png?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171101_68/500060902_1509473768556jlujO_PNG/810x595_1.png?type=w860" width="810" height="595" data-attachment-id="" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_5_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171103_252/500060902_1509643553336afYiK_PNG/4_1.png&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_252/500060902_1509643553336afYiK_PNG/4_1.png?type=w860" width="860" height="860" data-attachment-id="IDypMukVAKW9RLtn0VAtUyX2ax5c" alt=""> </a>
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
                 <!-- SE3-TEXT { -->특색 있는 이색주
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_6_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171101_151/500060902_1509473768651xqWUq_JPEG/mosa9Ja4F4.jpg?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171101_151/500060902_1509473768651xqWUq_JPEG/mosa9Ja4F4.jpg?type=w860" width="720" height="480" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">홍국쌀은 쌀에 붉은색을 띠는 곰팡이를 고체로 발효한 뒤 쌀을 발효시켜 만드는 쌀로,&nbsp;이를&nbsp;이용해&nbsp;100%&nbsp;수작업으로 붉은원숭이를&nbsp;빚고 있으며, 슈퍼푸드라고&nbsp;불리는&nbsp;붉은색의&nbsp;홍국쌀에는&nbsp;성인병&nbsp;예방에&nbsp;도움을&nbsp;주는&nbsp;모나콜린K&nbsp;성분을&nbsp;함유하여&nbsp;콜레스테롤&nbsp;저하,&nbsp;중성지방&nbsp;감소에&nbsp;도움을&nbsp;주는&nbsp;것으로&nbsp;알려져&nbsp;많은&nbsp;관심을&nbsp;받고&nbsp;있습니다.<br></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);"><br></span><span class="se_fs_T3" style="color: rgb(0, 0, 0);">붉은원숭이는 100% 경기미를 사용하여 누룩과 물로 만들고 있으며, 이 술이 띄고 있는 장밋빛의 붉은색은 합성 감미료 뿐 아니라 색소조차 들어가지 않은 무첨가 막걸리로 홍국쌀만을 이용하여 생산합니다.</span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_7_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171103_228/500060902_1509643602720NHivf_PNG/4_2.png&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171103_228/500060902_1509643602720NHivf_PNG/4_2.png?type=w860" width="860" height="860" data-attachment-id="IfuJp8qD0zu4WwQs9SN_6Urg61-w" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);"></span>일본식&nbsp;입국을&nbsp;사용하지&nbsp;않으며&nbsp;술샘&nbsp;연구소에서&nbsp;자체&nbsp;개발한&nbsp;누룩을&nbsp;직접&nbsp;디뎌&nbsp;술을&nbsp;빚습니다.<span class="se_fs_T3" style="color: rgb(0, 0, 0);"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_8_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171130_255/500060902_1511976843349gyqhc_JPEG/%C7%AA%B5%E5%BA%E48.jpg&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_255/500060902_1511976843349gyqhc_JPEG/%C7%AA%B5%E5%BA%E48.jpg?type=w860" width="860" height="604" data-attachment-id="ITRBDsmXIpPowCDDoaL8UVf_gP6c" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_9_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171130_157/500060902_15119768553615872m_JPEG/%C7%AA%B5%E5%BA%E43_1.jpg&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_157/500060902_15119768553615872m_JPEG/%C7%AA%B5%E5%BA%E43_1.jpg?type=w860" width="860" height="604" data-attachment-id="IFP0anEu9gH_B1cUMieDUUdL02HQ" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_10_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171130_133/500060902_1511976869488H5EjN_JPEG/%C7%AA%B5%E5%BA%E44_1.jpg&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_133/500060902_1511976869488H5EjN_JPEG/%C7%AA%B5%E5%BA%E44_1.jpg?type=w860" width="860" height="604" data-attachment-id="I5-H3dFR5JSWlB5acJxVaSy7-ddw" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_11_img&quot;, &quot;src&quot; : &quot;https://shop-phinf.pstatic.net/20171130_182/500060902_15119825704505T01s_JPEG/%C7%AA%B5%E5%BA%E432.jpg&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171130_182/500060902_15119825704505T01s_JPEG/%C7%AA%B5%E5%BA%E432.jpg?type=w860" width="860" height="604" data-attachment-id="IblefsOmnYKfeg4P24LOkjECwA6Q" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3" style="color: rgb(0, 0, 0);">홍국쌀 탁주는 일반 막걸리와 달리 파전 외에도 어떤 음식과도 어울리는 특징이 있습니다.</span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_12_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171102_42/500060902_1509597920657b5sGD_PNG/9_1.png?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171102_42/500060902_1509597920657b5sGD_PNG/9_1.png?type=w860" width="860" height="518" data-attachment-id="" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_13_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171102_218/500060902_1509597920761lkkO2_JPEG/810x500_1.jpg?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171102_218/500060902_1509597920761lkkO2_JPEG/810x500_1.jpg?type=w860" width="810" height="500" data-attachment-id="" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_14_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171102_81/500060902_1509597920837M3qb8_PNG/10_1.png?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_14_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171102_81/500060902_1509597920837M3qb8_PNG/10_1.png?type=w860" width="860" height="490" data-attachment-id="" alt=""> </a>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_15_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171102_155/500060902_1509597920909Gp4Kh_PNG/11_1.png?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_15_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171102_155/500060902_1509597920909Gp4Kh_PNG/11_1.png?type=w860" width="860" height="482" data-attachment-id="" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot; : &quot;SEDOC-1512023658857--1651435260_image_16_img&quot;, &quot;src&quot; : &quot;http://shop1.phinf.naver.net/20171102_296/500060902_1509597920975sNuoD_PNG/12_1.png?type=w860&quot;, &quot;linkUse&quot; : &quot;false&quot;,&quot;link&quot; : &quot;&quot;}"> <img id="SEDOC-1512023658857--1651435260_image_16_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171102_296/500060902_1509597920975sNuoD_PNG/12_1.png?type=w860" width="860" height="207" data-attachment-id="" alt=""> </a>
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
          id: 9,
          image: "/damon.jpg",
          price: 30780,
          companyName: "1932포천일동막걸리",
          productName: "담은생막걸리",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "단양주",
          volume: 750,
          rate: 4,
          alcohol: 6,
          sweet: 4,
          bitter: 2,
          sour: 2,
          aroma: 4,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_0_img&quot;,&quot;src&quot;:&quot;http://ai.esmplus.com/iop12453/common/popup.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_0_img" class="se_mediaImage __se_img_el" src="http://ai.esmplus.com/iop12453/common/popup.jpg" width="860" height="629" data-attachment-id="" alt=""> </a>
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_1_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180405_228/101104411_1522921897743lqmCm_JPEG/pro_01.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180405_228/101104411_1522921897743lqmCm_JPEG/pro_01.jpg?type=w860" width="860" height="1368" data-attachment-id="ItbrwAh4SHebZEWhVI-mydEuXLiM" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:180px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_2_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_206/101104411_1522832790181mamOF_PNG/image_8371480961522832722140.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_206/101104411_1522832790181mamOF_PNG/image_8371480961522832722140.jpg?type=w860" width="180" height="254" data-attachment-id="IxC6AVVkBlRAlGPol4_K0jm4pmhE" alt=""> </a>
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
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:100px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_3_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_185/101104411_1522832827457BR23k_PNG/image_3450258961522832754380.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_185/101104411_1522832827457BR23k_PNG/image_3450258961522832754380.jpg?type=w860" width="100" height="101" data-attachment-id="IHYk4WlgsfkY96TC8CNdXrpI8qKI" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->01<br>누가&nbsp;생산하나요?
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
                 <!-- SE3-TEXT { -->86년 전통의 명문도가 “1932포천일동막걸리”
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_4_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180405_250/101104411_15229204550292rI4i_JPEG/%BB%E7%C0%E5%B4%D4%C0%CC%B9%CC%C1%F6.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180405_250/101104411_15229204550292rI4i_JPEG/%BB%E7%C0%E5%B4%D4%C0%CC%B9%CC%C1%F6.jpg?type=w860" width="3594" height="2825" data-attachment-id="IsaBgwLS7nOr_yAwx5J4wQRnBzts" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">우측 김남채 대표</span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span></span><span style="color: black;"><span>&nbsp;</span></span><span style="color: black;">1932</span><span style="color: black;">포천일동막걸리는 </span><span style="color: black;">1932</span><span style="color: black;">년 이병규 옹이 설립한 포천막걸리의 원조입니다</span><span style="color: black;">.</span><br><span style="color: black;">전신</span><span style="color: black;">(</span><span style="color: black;">前身</span><span style="color: black;">)</span><span style="color: black;">인</span><span style="color: black;"> </span><span style="color: black;">장천양조장은</span><span style="color: black;"> 산 높고 물 맑기로 소문난 </span><span style="color: black;">청계산</span><span style="color: black;"> 자락에 자리 잡았으며</span><span style="color: black;">, 4</span><span style="color: black;">대 경영을 시작한 지금의 </span><span style="color: black;">1932</span><span style="color: black;">포천일동막걸리의 깊은 맛도 좋은 물에서 비롯되었습니다</span><span style="color: black;">.</span><br><br><span style="color: black;">오랜 전통을 이어받아 </span><span style="color: black;">현대의 감성을 더한 </span><span style="color: black;">프리미엄 막걸리를 </span><span style="color: black;">만들어낸</span><span style="color: black;"> </span><span style="color: black;">1932</span><span style="color: black;">포천일동막걸리는 </span><span style="color: black;">우리 술의 </span><span style="color: black;">새로운 </span><span style="color: black;">길을</span><span style="color: black;"> </span><span style="color: black;">“</span><span style="color: black;">법고창신</span><span style="color: black;">[</span><span style="color: black;">法古創新</span><span style="color: black;">]”</span><span style="color: black;">의</span><span style="color: black;"> </span><span style="color: black;">마음으로</span><span style="color: black;"> </span><span style="color: black;">열겠습니다</span><span style="color: black;">.</span><br><span style="color: black;">최고의 </span><span style="color: black;">술맛</span><span style="color: black;">, </span><span style="color: black;">최상의 품질로 고객과 함께 한결같은 </span><span style="color: black;">1932</span><span style="color: black;">포천일동막걸리로 만들어 갈 것임을 자부합니다</span><span style="color: black;">.</span><br><span style="color: black;">*</span><span style="color: black;">법고창신</span><span style="color: black;"> </span><span style="color: black;">: </span><span style="color: black;">옛것을</span><span style="color: black;"> 본받아 새로운 것을 창조한다</span><span style="color: black;">.</span><span></span><span class="se_fs_T3"></span><span class="se_fs_T2"></span>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->02<br>어디에서&nbsp;생산하나요?
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
                 <!-- SE3-TEXT { -->경기도 포천시 일동면
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_5_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_290/101104411_1522832885846INTUC_JPEG/0-0.JPG&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_290/101104411_1522832885846INTUC_JPEG/0-0.JPG?type=w860" width="5184" height="3456" data-attachment-id="I7eL-xSYfMUUtcY_59ZX7Pz3Kawc" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_6_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_193/101104411_1522832885583hFqlS_JPEG/%BE%E7%C1%B6%C0%E51.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_193/101104411_1522832885583hFqlS_JPEG/%BE%E7%C1%B6%C0%E51.jpg?type=w860" width="3648" height="1641" data-attachment-id="IuZo3iZiWHKzGMLzWh5MsLc0GvRY" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_7_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_122/101104411_1522832885241tDBig_JPEG/%BE%E7%C1%B6%C0%E52.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_122/101104411_1522832885241tDBig_JPEG/%BE%E7%C1%B6%C0%E52.jpg?type=w860" width="3648" height="1641" data-attachment-id="I0qYjaKBOg6h1N75IJm8lLjtAfkc" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span></span><span style="color: black">경기도 포천</span><span style="color: black">(</span><span style="color: black">抱川</span><span style="color: black">)</span><span style="color: black">은 강을 안고 있는 마을이라는 뜻을 가진 만큼&nbsp;</span><span style="color: black">물이 좋기로 유명하며</span><span style="color: black"> </span><span style="color: black">그 좋은 물과 풍부한 일조량으로 자란 <br></span><span style="color: black">쌀은 임금님 진상미로 오른 만큼 품질이 우수합니다</span><span style="color: black">.</span><br><br><span style="color: black">이 좋은 물과 쌀과 함께</span><span style="color: black"> </span><span style="color: black">나눌수록 </span><span style="color: black">채워지는 술잔의 기쁨</span><span style="color: black">, </span><span style="color: black">넉넉한 </span><span style="color: black">마음으로 </span><span style="color: black">함께하는 </span><span style="color: black">어울림의 행복</span><span style="color: black">, </span><span style="color: black">노고와 </span><span style="color: black">기쁨을 함께할 술 한잔의 깊이</span><span style="color: black">, </span><span style="color: black">깊은 </span><span style="color: black">정성이 모여 </span><span style="color: black">86</span><span style="color: black">년 전통의 기법으로 좋은 막걸리를 담아냈습니다</span><span style="color: black">.</span><span></span><span class="se_fs_T3"></span>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->03<br>어떤&nbsp;특징이&nbsp;있나요?
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
                 <!-- SE3-TEXT { -->無 합성감미료의 “생쌀발효＂生막걸리
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_8_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_274/101104411_1522832934305pxjEd_JPEG/3.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_274/101104411_1522832934305pxjEd_JPEG/3.jpg?type=w860" width="3000" height="2000" data-attachment-id="I5BksbObmpwl2uIoEB8lDoM-nYv4" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span></span><span style="color: black;">“</span><span style="color: black;">하얀 구름의 맛을 </span><span class="se_fs_T2" style="color: black;"><b>닮은</b></span><span style="color: black;"> </span><br><span style="color: black;">86</span><span style="color: black;">년 명문도가의 전통기법으로 </span><span class="se_fs_T2" style="color: black;"><b>담근</b></span><br><span style="color: black;">명인의 정성으로 손수</span><span class="se_fs_T2" style="color: black;"><b> </b></span><span class="se_fs_T2" style="color: black;"><b>‘</b></span><span class="se_fs_T2" style="color: black;"><b>담은</b></span><span class="se_fs_T2" style="color: black;"><b>[</b></span><span class="se_fs_T2" style="color: black;"><b>覃恩</b></span><span class="se_fs_T2" style="color: black;"><b>]WHITE’</b></span><span style="color: black;"> </span><span style="color: black;">막걸리</span><span style="color: black;">”</span><span><br></span><span><br></span><span>우리술&nbsp;막걸리의&nbsp;세계화와&nbsp;고급화를&nbsp;위해&nbsp;끊임없이&nbsp;연구를&nbsp;하던&nbsp;중 포천의&nbsp;하늘까지&nbsp;담아보고&nbsp;싶다는&nbsp;생각을&nbsp;했습니다. <br></span><span>하얗고&nbsp;뽀얀&nbsp;구름을&nbsp;입에&nbsp;넣었을&nbsp;때의 느낌과&nbsp;맛이&nbsp;궁금했고,&nbsp;때문에&nbsp;합성감미료와&nbsp;인공탄산을 일체&nbsp;첨가하지&nbsp;않았습니다.<br></span><span> 더&nbsp;깔끔하고&nbsp;구름&nbsp;같은&nbsp;맛을&nbsp;담아내기위해 고두밥을&nbsp;찌지&nbsp;않고&nbsp;생쌀을&nbsp;발효하여&nbsp;기존&nbsp;막걸리와는 완전&nbsp;다른&nbsp;맛을&nbsp;만들어냈습니다. 손으로&nbsp;직접&nbsp;담아내는&nbsp;수제공법으로&nbsp;구름막걸리라는 별명까지&nbsp;생긴&nbsp;전통주로&nbsp;자리매김하고&nbsp;있습니다</span><span></span><span class="se_fs_T3"></span><span class="se_fs_T3"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_9_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180328_134/101104411_1522216874091o8GMu_JPEG/pro_02_01.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180328_134/101104411_1522216874091o8GMu_JPEG/pro_02_01.jpg?type=w860" width="860" height="864" data-attachment-id="IsmoMQVf_isa6FITdDDPQ-NIRfk4" alt=""> </a>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_10_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180327_36/101104411_1522143836704qQDDY_JPEG/4.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180327_36/101104411_1522143836704qQDDY_JPEG/4.jpg?type=w860" width="860" height="462" data-attachment-id="I2nQyiY18LE6RocL_CzNoADGINLA" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->04<br>더&nbsp;맛있게&nbsp;즐기는&nbsp;방법
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
                 <!-- SE3-TEXT { -->담은 은 한식과 더불어
                 <br>세계의 모든 음식과도 잘 어울립니다.
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_11_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180406_229/101104411_1523004830444q2uo8_JPEG/%B4%E3%C0%BA%B7%B9%BD%C3%C7%C7.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180406_229/101104411_1523004830444q2uo8_JPEG/%B4%E3%C0%BA%B7%B9%BD%C3%C7%C7.jpg?type=w860" width="860" height="665" data-attachment-id="IX92YOvJMhDUJdI1u0JX-49_aw6g" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T3"></span><span></span><span>담은의&nbsp;부드러운&nbsp;맛은&nbsp;어떤&nbsp;안주든&nbsp;잘&nbsp;어울리는&nbsp;술입니다.<br></span><span>우리의&nbsp;전통주인만큼&nbsp;한식과도&nbsp;잘&nbsp;어울리며, 양식이나&nbsp;일식과도&nbsp;잘&nbsp;어울립니다.<br></span><span> 누룩냄새를&nbsp;싫어하는&nbsp;이들을&nbsp;위해&nbsp;냄새를&nbsp;제거하여&nbsp;신선하고 깔끔한&nbsp;맛이&nbsp;특징이며&nbsp;관능과&nbsp;주질의&nbsp;특성상&nbsp;자극적인&nbsp;음식이나 다소&nbsp;느끼한&nbsp;음식과&nbsp;더욱&nbsp;잘&nbsp;어울립니다.<br></span><span> 묵직한&nbsp;바디감&nbsp;때문에&nbsp;가벼운&nbsp;과일이나&nbsp;초콜렛&nbsp;같은&nbsp;간식&nbsp;종류와 마셔도&nbsp;좋으며&nbsp;술의&nbsp;느낌을&nbsp;더&nbsp;느끼고자&nbsp;하시는&nbsp;분들은 증류주나&nbsp;다른&nbsp;액상을&nbsp;첨가하여&nbsp;칵테일&nbsp;형식으로 마셔도&nbsp;좋은&nbsp;술입니다.</span><span></span><span class="se_fs_T3"></span><span class="se_fs_T3"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_12_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180404_221/101104411_1522832989018SoJ7K_JPEG/%B4%D9%C0%CC%B4%D7.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_12_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180404_221/101104411_1522832989018SoJ7K_JPEG/%B4%D9%C0%CC%B4%D7.jpg?type=w860" width="6335" height="3522" data-attachment-id="IQM4ayo2JtTOZb8b3gUT-hHnAbJk" alt=""> </a>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->05<br>어떻게&nbsp;배송되나요?
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
                 <!-- SE3-TEXT { -->당일&nbsp;11시이전&nbsp;주문건까지&nbsp;당일배송됩니다.
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
                 <!-- SE3-TEXT { --><span></span><span>스티로폼&nbsp;박스,&nbsp;아이스팩과&nbsp;함께&nbsp;배송되며 당일&nbsp;11시&nbsp;이전&nbsp;결제&nbsp;완료된&nbsp;주문건에&nbsp;한해&nbsp;당일&nbsp;배송됩니다.<br></span><span>생막걸리&nbsp;특성상&nbsp;미리&nbsp;재고를&nbsp;쌓아둘&nbsp;수&nbsp;없어 주문폭주시&nbsp;2~3일 가량&nbsp;배송이&nbsp;늦춰질&nbsp;수도&nbsp;있습니다.<br></span><span> 배송받으신&nbsp;제품은&nbsp;바로&nbsp;냉장보관하셔야 제조일로부터&nbsp;30일&nbsp;간&nbsp;우수한&nbsp;맛을&nbsp;변함없이&nbsp;느끼실&nbsp;수&nbsp;있습니다.</span><span></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_quotation quotation_bubble">
           <div class="se_sectionArea">
            <div class="se_editArea">
             <div class="se_viewArea se_fs_T3">
              <div class="se_editView">
               <div class="se_textView">
                <blockquote class="se_textarea">
                 <!-- SE3-TEXT { -->상품구성 / 담은 생막걸리 WHITE 6도 750mlx3병입
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_13_img&quot;,&quot;src&quot;:&quot;https://shop-phinf.pstatic.net/20180406_149/101104411_1522985721424XMeS9_JPEG/%B4%E3%C0%BA_%C6%D0%C5%B0%C1%F6%BB%E7%C1%F8-1.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_13_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180406_149/101104411_1522985721424XMeS9_JPEG/%B4%E3%C0%BA_%C6%D0%C5%B0%C1%F6%BB%E7%C1%F8-1.jpg?type=w860" width="860" height="556" data-attachment-id="IfXXmvv4ewhvcNYYiOUKGRFPEQkA" alt=""> </a>
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
                 <!-- SE3-TEXT { -->
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_14_img&quot;,&quot;src&quot;:&quot;http://gi.esmplus.com/gsool61/company/b.jpg&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_14_img" class="se_mediaImage __se_img_el" src="http://gi.esmplus.com/gsool61/company/b.jpg" width="860" height="1007" data-attachment-id="" alt=""> </a>
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:860px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1523432215071--659255438_image_15_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20171018_248/100934831_15083041870482pFj6_JPEG/notice.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1523432215071--659255438_image_15_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20171018_248/100934831_15083041870482pFj6_JPEG/notice.jpg?type=w860" width="860" height="600" data-attachment-id="" alt=""> </a>
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
        },
        {
          id: 10,
          image: "/100years.jpg",
          price: 16000,
          companyName: "추연당",
          productName: "백년향",
          category: "탁주",
          ingredient: "쌀",
          makeTimes: "삼양주 이상",
          volume: 500,
          rate: 5,
          alcohol: 10,
          sweet: 2,
          bitter: 4,
          sour: 2,
          aroma: 4,
          deliveryCharge: 2500,
          freeDeliveryMoney: 20000,
          productInfo: `<div class="se_component_wrap sect_dsc __se_component_area">
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H1 se_fw_bold" style="color: #0092e6;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h4 class="se_textarea">
                 <!-- SE3-TEXT { -->추연당 백년향 2병 세트
                 <!-- } SE3-TEXT --></h4>
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
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-justify">
            <div class="se_editArea">
             <div class="se_viewArea">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_0_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_251/101152260_1528773959956kgMVz_JPEG/%BC%F8%C7%E2%B9%E9%B3%E2_1.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_0_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_251/101152260_1528773959956kgMVz_JPEG/%BC%F8%C7%E2%B9%E9%B3%E2_1.jpg?type=w860" width="6017" height="4011" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">추연당의 순향주와 백년향</span>
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
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-center">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H1 se_fw_bold" style="color: #00a350;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h4 class="se_textarea">
                 <!-- SE3-TEXT { -->추연당 순향주와 백년향
                 <!-- } SE3-TEXT --></h4>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>추연당의 순향주</b></span><span class="se_fs_T2">는 </span><span class="se_fs_T2">고문헌의 <br></span><span class="se_fs_T2"></span><span class="se_fs_T2">청주 </span><span class="se_fs_T2">제조법을 </span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>오양주</b></span><span class="se_fs_T2"> 방식으로 <br></span><span class="se_fs_T2">재현한 품격 있는</span><span class="se_fs_T2"><b> </b></span><span class="se_fs_T2" style="color: rgb(0, 163, 80);"><b>전통주</b></span><span class="se_fs_T2">이며&nbsp;<br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>추연당의 백년향</b></span><span class="se_fs_T2">은 </span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>삼양주</b></span><span class="se_fs_T2"> 방식으로 정성을 다해 빚은 </span><span class="se_fs_T2" style="color: rgb(0, 163, 80);"><b>손막걸리</b></span><span class="se_fs_T2"> 입니다.<br></span><span class="se_fs_T2">추연당의 전통주는 모든 과정을 <br></span><span class="se_fs_T2">손으로 빚고 있으며 </span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>경기도 여주쌀</b></span><span class="se_fs_T2">과 우리나라 토종밀인 </span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>앉은뱅이 밀</b></span><span class="se_fs_T2">로 <br></span><span class="se_fs_T2">만든 </span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>누룩</b></span><span class="se_fs_T2">을 가지고&nbsp;</span><span class="se_fs_T2"><b> </b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>옥으로 된 </b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>암반</b></span><span class="se_fs_T2">에서 흐르는</span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"> 지하수</span><span class="se_fs_T2">로 빚은 <br></span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>고품격 프리미엄&nbsp;</b></span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>전통주</b></span><span class="se_fs_T2">로</span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b> 경기도</b></span><span class="se_fs_T2">의 추천을 받은 </span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>지역 전통주</b></span><span class="se_fs_T2">입니다.</span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>지&nbsp; &nbsp; &nbsp; &nbsp;역&nbsp; :&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b>경기도 여주</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b></b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>양조장명&nbsp; :&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 163, 80);"><b>추연당</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b></b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>상 품&nbsp; 명&nbsp; :&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>순향주와 백년향</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b></b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>주류종류 :&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b>순향주</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b> (청&nbsp; &nbsp; 주)</b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b>백년향</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b> (막걸리)</b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>용&nbsp; &nbsp; &nbsp; 량&nbsp; :&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b>순향주</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>&nbsp; 375ml</b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b>백년향&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>500ml</b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>도&nbsp; &nbsp; &nbsp; 수&nbsp; :&nbsp; </b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b>순향주&nbsp;</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b> 15%</b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</b></span><span class="se_fs_T2" style="color: rgb(0, 0, 0);"><b> 백년향&nbsp;</b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b> 10%</b><br></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>원&nbsp; 재 료&nbsp; :</b></span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>&nbsp; 쌀 </b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>(경기미)</b></span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>, 누룩 </b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>(국내산)</b></span><span class="se_fs_T2" style="color: rgb(241, 47, 34);"><b>, 물 </b></span><span class="se_fs_T2" style="color: rgb(0, 118, 200);"><b>(정제수)</b></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_1_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_191/101152260_1528773960092gkaQJ_JPEG/%BC%F8%C7%E2%C1%D6_1.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_1_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_191/101152260_1528773960092gkaQJ_JPEG/%BC%F8%C7%E2%C1%D6_1.jpg?type=w860" width="4000" height="3770" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">추연당의 순향주</span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_2_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_42/101152260_1528773960332ifoNj_JPEG/%B9%E9%B3%E2%C7%E2_3.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_2_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_42/101152260_1528773960332ifoNj_JPEG/%B9%E9%B3%E2%C7%E2_3.jpg?type=w860" width="4000" height="4000" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">추연당의 백년향</span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->01. 누가 생산하나요 ?
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(133, 221, 255);">추연당의&nbsp;대표와&nbsp;공장장</span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
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
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_3_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_134/101152260_1528773960716Jm9Lz_JPEG/2018-06-12.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_3_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_134/101152260_1528773960716Jm9Lz_JPEG/2018-06-12.jpg?type=w860" width="800" height="399" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">추연당 이숙 대표</span>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_4_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_176/101152260_1528773960966o9zMk_JPEG/%C3%D6%B1%D9_%BE%F7%B5%A5%C0%CC%C6%AE.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_4_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_176/101152260_1528773960966o9zMk_JPEG/%C3%D6%B1%D9_%BE%F7%B5%A5%C0%CC%C6%AE.jpg?type=w860" width="800" height="467" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">추연당 박주기 공장장</span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2">한국 가양주 연구소와 한국 전통 음식 연구소에서 술 빚는 것을 배우고 오직 고문헌에 있는대로&nbsp;<br></span><span class="se_fs_T2">재현하고자 하는 두사람이 함께하여 한살림 여주 금당리 공동체의 생산자들의 도움을 받아 <br></span><span class="se_fs_T2">정성을 다해 빚고 있습니다.<br></span><span class="se_fs_T2"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->02. 양조장이 있는 곳 ?
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_5_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180614_11/101152260_1528980823966MFuwJ_JPEG/2018-06-14.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_5_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180614_11/101152260_1528980823966MFuwJ_JPEG/2018-06-14.jpg?type=w860" width="800" height="480" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2">추연당 양조장은 물 맑고 공기 좋은 여주 금당리 한살림 마을 안에 있습니다.<br></span><span class="se_fs_T2">이곳은 생태 순환 유기농 농장과 농산물 가공 공장, 그리고 양조용 쌀을 가공 할 수 있는 정미소뿐만<br></span><span class="se_fs_T2">아니라 자라나는 아이들이 자연의 소중함을 배우는 어린이 농사학교를 운영하고 있고 생태 귀농학교 및<br></span><span class="se_fs_T2">한살림 협동조합 실무자 연수시설이 있는 친환경 공동체 마을 입니다.</span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->03. 상품의 특징은 무엇인가요 ?
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(126, 200, 157);">자연이&nbsp;주신&nbsp;재료만으로&nbsp;<br></span><span class="se_fs_T1" style="background-color: rgb(126, 200, 157);">술을&nbsp;빚습니다.</span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2">추연당의 전통주는 자연이 주신 재료만으로 빚습니다.<br></span><span class="se_fs_T2">그 어떤 맛도 자연이 주신 맛과 향을 따라 갈 수 없습니다.<br></span><span class="se_fs_T2">쌀에서 우러나오는 단맛과 곡향 <br></span><span class="se_fs_T2">그리고 은은한 누룩향을 최대한 <br></span><span class="se_fs_T2">살리고자 정성을 다하고 있습니다.<br></span><span class="se_fs_T2">추연당은 쌀, 물, 누룩 이외에는 어떤 화학 첨가물을 사용하지 않습니다.</span><br>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
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
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_6_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_6/101152260_1528773961119eyzKb_JPEG/2016%B3%E21%BF%F9%BB%E7%C1%F8-001.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_6_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_6/101152260_1528773961119eyzKb_JPEG/2016%B3%E21%BF%F9%BB%E7%C1%F8-001.jpg?type=w860" width="800" height="480" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">자연의 재료</span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(126, 200, 157);">오양주의&nbsp;약주(청주)와&nbsp;<br></span><span class="se_fs_T1" style="background-color: rgb(126, 200, 157);">삼양주의&nbsp;탁주</span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T2">우리 전통주는 빚는 횟수에 따라 <br></span><span class="se_fs_T2">오양주, 삼양주 등으로 <br></span><span class="se_fs_T2">이름을 붙이기도 합니다.<br></span><span class="se_fs_T2">한번에 빚는 술을 단양주, </span><span class="se_fs_T2">밑술에 <br></span><span class="se_fs_T2">덧술을 넣어 빚는 술을 </span><span class="se_fs_T2">이양주, <br></span><span class="se_fs_T2">덧술을 한 번 더한 술을 삼양주,<br></span><span class="se_fs_T2">다섯번 빚는 술을 오양주라고 합니다.<br></span><span class="se_fs_T2">이렇게 빚어 술이 다 발효 되려면 <br></span><span class="se_fs_T2">약 40일 정도 시간이 걸립니다.<br></span><span class="se_fs_T2">정성을 말하지 않아도 정성이 없으면 할 수 없는 방법이며 최고의 <br></span><span class="se_fs_T2">순향주(청주)와 백년향(탁주)이&nbsp;<br></span><span class="se_fs_T2">탄생되는 과정입니다.<br></span><span class="se_fs_T2">누구나 생각은 할 수 있지만 아무나 할 수 없는 방법입니다.</span><span class="se_fs_T2"><br></span><span class="se_fs_T2"></span>
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
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_7_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_92/101152260_1528773961244Llpa5_JPEG/2018-06-122.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_7_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_92/101152260_1528773961244Llpa5_JPEG/2018-06-122.jpg?type=w860" width="800" height="480" data-attachment-id="" alt=""> </a>
              <div class="se_editView">
               <div class="se_textView se_mediaCaption">
                <span class="se_textarea">술이 발효 되는 과정</span>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(126, 200, 157);">저온&nbsp;숙성까지 백일만에 완성<br></span><span class="se_fs_T1" style="background-color: rgb(126, 200, 157);"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_8_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_286/101152260_1528773961676kuWio_JPEG/20180605_111119.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_8_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_286/101152260_1528773961676kuWio_JPEG/20180605_111119.jpg?type=w860" width="4128" height="2322" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2">저온 숙성까지 추연당의 술은 <br></span><span class="se_fs_T2">백일주입니다.<br></span><span class="se_fs_T2">술을 빚는 것은 과학입니다.<br></span><span class="se_fs_T2">술을 숙성하는 과정은 예술입니다.<br></span><span class="se_fs_T2">추연당의 술은 -1℃ 의 <br></span><span class="se_fs_T2"></span><span class="se_fs_T2">저온 숙성실에서 60일간 숙성 과정을 거친 후에 탄생하게 됩니다.<br></span><span class="se_fs_T2">숙성 기간은 술에 맛과 향을 더욱 더 풍부하게 해 주는 기간이며 <br></span><span class="se_fs_T2">순향주(청주)는 더욱 맑게 <br></span><span class="se_fs_T2">백년향(탁주)은<br></span><span class="se_fs_T2">더욱 더 향기롭게 재탄생 됩니다.<br></span><span class="se_fs_T2"></span><br><span class="se_fs_T2" style=""></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->04. 더 맛있게 먹는 방법
                 <!-- } SE3-TEXT --></h5>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_image default">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_9_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_12/101152260_1528773961856EV0Gm_JPEG/2018-06-123.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_9_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_12/101152260_1528773961856EV0Gm_JPEG/2018-06-123.jpg?type=w860" width="800" height="480" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(246, 159, 193);">순향주(청주)를 맛있게 먹는 방법</span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="" class="se_fs_T2">순향주(청주)는 적당한 단맛과 신맛 감칠 맛을 함께 가지고 있습니다.<br></span><span style="" class="se_fs_T2">한식과 일식뿐만 아니라 양식과 중식까지 어떤 음식에도 어울리는 청주입니다.<br></span><span style="" class="se_fs_T2">우선 식전의 한모금은 살짝 느껴지는 신맛이 식욕을 당겨줍니다.<br></span><span style="" class="se_fs_T2">에피타이저 부터 메인까지 입안의 <br></span><span style="" class="se_fs_T2">음식이 바뀔 때나 약간 기름진 음식이 입안을 감돌때&nbsp;</span><span style="" class="se_fs_T2">청주 한모금을 머금고 <br></span><span style="" class="se_fs_T2">입안을 가셔주면 음식이 가지고 있는 풍미와 함께 즐길 수 있습니다.<br></span><span style="" class="se_fs_T2">순향주청주는 12도에서 15도 사이에 드시는 것이 가장 좋은 온도입니다.<br></span><span style="" class="se_fs_T2">드시는 잔은 백색의 도자기 잔이 <br></span><span style="" class="se_fs_T2">느낌이 좋습니다.<br></span><span style="" class="se_fs_T2"></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(246, 159, 193);"><span style="color: rgb(0, 0, 0); background-color: rgb(246, 159, 193);">백년향(막걸리)를 맛있게 먹는 방법</span></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="" class="se_fs_T2">백년향막걸리는 적당한 단맛과 살짝 느낄 수 있는 누룩향과 과일향을 함께 가지고 있습니다.<br></span><span style="" class="se_fs_T2"></span><span style="" class="se_fs_T2">백년향 막걸리는 우리 고유의 밥상의 모든 반찬과도 잘 어울리며 퓨전 음식과도 잘 어울리는 막걸리입니다.<br></span><span style="" class="se_fs_T2">또 많이 달지 않은 단맛은 특별한 안주 없이도 충분히 즐길 수 있는 <br></span><span style="" class="se_fs_T2">술입니다.<br></span><span style="" class="se_fs_T2">살짝 느껴지는 누룩향은 <br></span><span style="" class="se_fs_T2">옛날 막걸리에 대한 향수를 가지고 <br></span><span style="" class="se_fs_T2">계신 어르신들이 매우 좋아 하시는 <br></span><span style="" class="se_fs_T2">향입니다.<br></span><span style="" class="se_fs_T2">백년향 막걸리는 15도 정도로 드시는 것이 백년향이 가지고 있는 크레미한 목넘김의 느낌을 </span><span style="" class="se_fs_T2">즐길 수 있습니다.<br></span><span style="" class="se_fs_T2">드실 때는 일반적인 잔 보다는 와인잔이나 유리잔을 권하고 싶습니다.<br></span><span style="" class="se_fs_T2"><br></span><span style="" class="se_fs_T2"></span>
                 <!-- } SE3-TEXT --></p>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
          <div class="se_component se_sectionTitle ">
           <div class="se_sectionArea se_align-left">
            <div class="se_editArea">
             <div class="se_viewArea se_ff_nanumgothic se_fs_H2 " style="color: ;
                                text-decoration: inherit;
                                font-style: inherit;
                                ">
              <div class="se_editView">
               <div class="se_textView">
                <h5 class="se_textarea">
                 <!-- SE3-TEXT { -->05. 어떻게 배송되나요 ?
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1" style="background-color: rgb(244, 212, 0);">주문 확인및 배송<br></span><span class="se_fs_T2" style="">추연당 배송은 주문일 다음날 배송을 원칙으로 합니다.<br></span><span class="se_fs_T2" style="">금요일및 공휴일 주문은 공휴일이 <br></span><span class="se_fs_T2" style="">끝나는 다음날 배송을 합니다.<br></span><span class="se_fs_T2" style="">현재는 우체국 배송으로 지역별 <br></span><span class="se_fs_T2" style="">차이는 있지만 배송일 다음날 도착 <br></span><span class="se_fs_T2" style="">됩니다.<br></span><span class="se_fs_T2" style=""><br></span><span class="se_fs_T1" style="background-color: rgb(244, 212, 0);">배송시 포장<br></span><span class="se_fs_T2" style="">배송시 포장은 스치로품 박스에 <br></span><span class="se_fs_T2" style="">젤아이스를 넣어 배송합니다.<br></span><span class="se_fs_T2" style="">또는 와인 에어백에 젤 아이스를 넣어 배송합니다.<br></span><span class="se_fs_T2" style="">추연당의 청주와 막걸리는 <br></span><span class="se_fs_T2" style="">비살균주임으로 받으시는 <br></span><span class="se_fs_T2" style="">즉시 </span><span class="se_fs_T2" style="">냉장 보관하셔야 합니다.<br></span><span class="se_fs_T2" style="">선물용 박스는 별매품입니다.<br></span><span class="se_fs_T2" style="">선물용 박스를 별도로 구매하신 분은 함께 보내 드립니다.<br></span><span class="se_fs_T2" style=""></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span style="" class="se_fs_T2"></span>
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
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_10_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_286/101152260_1528773961971WKqoT_JPEG/20180413_144539.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_10_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_286/101152260_1528773961971WKqoT_JPEG/20180413_144539.jpg?type=w860" width="3386" height="2910" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T2"></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1">06. 등록 상표&nbsp;</span><span class="se_fs_T1"></span>
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
             <div class="se_viewArea" style="max-width:800px">
              <a onclick="return false;" class="se_mediaArea __se_image_link __se_link" data-linktype="img" data-linkdata="{&quot;imgId&quot;:&quot;SEDOC-1529379646324-1737534874_image_11_img&quot;,&quot;src&quot;:&quot;http://shop1.phinf.naver.net/20180612_165/101152260_1528773962077zEh7S_JPEG/E.jpg?type=w860&quot;,&quot;linkUse&quot;:&quot;false&quot;,&quot;link&quot;:&quot;&quot;}"> <img id="SEDOC-1529379646324-1737534874_image_11_img" class="se_mediaImage __se_img_el" src="https://shop-phinf.pstatic.net/20180612_165/101152260_1528773962077zEh7S_JPEG/E.jpg?type=w860" width="800" height="480" data-attachment-id="" alt=""> </a>
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
                 <!-- SE3-TEXT { --><span class="se_fs_T1"></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1"></span>
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
             <div class="se_viewArea se_ff_nanumgothic se_fs_T3 se_align-left">
              <div class="se_editView">
               <div class="se_textView">
                <p class="se_textarea">
                 <!-- SE3-TEXT { --><span class="se_fs_T1"></span>
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
        ],
        4: [
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
        5: [
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
        6: [
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
        7: [
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
        8: [
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
        9: [
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
        10: [
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
        ],
        4: [
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
        5: [
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
        6: [
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
        7: [
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
        8: [
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
        9: [
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
        10: [
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
