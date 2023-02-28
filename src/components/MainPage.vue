<template>
  <div class="common-layout">


    <!-- Header -->
    <el-container>
      <el-header class="header">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-row>
            <el-menu-item index="1">
              <el-avatar
              shape="square" :size="50"
                style="margin-top: 0%; margin-left: 35%; width:0.75cm; height:0.75cm"
                src="https://storage.googleapis.com/proudcity/santaclaracountycacities/uploads/2021/07/333-3335189_menu-three-horizontal-lines-symbol-free-icon-logos-with-horizontal-lines.jpg"
                @click="isCollapse = !isCollapse"
              />
            </el-menu-item>
            <el-menu-item index="2">
              <img class="gimg" :src="gmailImg" />
              <p class="gmail">Gmail</p>
            </el-menu-item>

            <el-menu-item index="3" class="search">
              <el-input placeholder="Search mail">
                <template #prefix
                  ><el-icon><Search /></el-icon
                ></template>
                <template #append
                  ><el-icon><Expand /></el-icon
                ></template>
              </el-input>
            </el-menu-item>

            <el-menu-item index="4" style="width: 5cm; margin-left: 13.5%">
              <el-button class="active">
                <img
                  :src="green"
                  style="width: 25%; margin-left: 1%; margin-right: 10%"
                />
                <b>Active</b>
                <el-icon style="margin-left:auto"><CaretBottom /></el-icon>
              </el-button>
            </el-menu-item>

            <el-menu-item index="5" style="margin-left: 120%; margin-top: -6%">
              <el-icon><QuestionFilled /></el-icon>
            </el-menu-item>

            <el-menu-item index="6" style="margin-left: 125%; margin-top: -6%">
              <el-icon><Setting /></el-icon>
            </el-menu-item>

            <el-menu-item index="7" style="margin-left: 130%; margin-top: -6%">
              <el-icon @click="dialogVisible1 = true"><Grid /></el-icon>
              
            </el-menu-item>

  <el-dialog
    v-model="dialogVisible1"
    style="width:6cm; height:9cm; margin-left:85%; margin-top: 4%; border-radius: 0.2cm;"
    :show-close="false"
  >
 
      <el-row>
        <el-avatar style="margin-top:-20%; width: 1.5cm; height: 1.5cm; margin-left: 3%;" :src="account" />
        <el-avatar style="margin-top:-20%; width: 1.5cm; height: 1.5cm; margin-left: 5%;" src="https://cdn-teams-slug.flaticon.com/google.jpg" />
        <el-avatar style="margin-top:-18%; width: 1.25cm; height: 1.25cm; margin-left: 5%;" src="data:image/png;base64,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" />
      </el-row>
      <el-row>
        <span style="font-family: Arial; font-size:16px; margin-left: 5%">Acount</span>
        <span style="font-family: Arial; font-size:16px;  margin-left: 10%">Search</span>
        <span style="font-family: Arial; font-size:16px; margin-left: 8%">Map</span>
      </el-row>
      <br /><br />
      <el-row>
        <el-avatar style="margin-top:0%; width: 1.5cm; height: 1.5cm; margin-left: 3%;" src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000" />
        <el-avatar style="margin-top:0%; width: 1.5cm; height: 1.5cm; margin-left: 5%;" src="https://www.mobiflip.de/wp-content/uploads/2022/07/google-play-logo-neu-header.jpg" />
        <el-avatar style="margin-top:0%; width: 1.25cm; height: 1.20cm; margin-left: 5%;" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" />
      </el-row>
      <el-row>
        <span style="font-family: Arial; font-size:16px; margin-left: 5%">Youtube</span>
        <span style="font-family: Arial; font-size:16px;  margin-left: 10%">Store</span>
        <span style="font-family: Arial; font-size:16px; margin-left: 8%">Gmail</span>
      </el-row>
      <br /><br />
      <el-row>
        <el-avatar  style="margin-top:0%; width: 1.5cm; height: 1cm; margin-left: 3%;" src="https://1000logos.net/wp-content/uploads/2021/12/Google-Meet-Logo.jpg" />
        <el-avatar @click="dialogVisible6" style="margin-top:0%; margin-left: 10%;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAABelBMVEX/////ugAArEcmhPwAgy0AZtrqQzUagPx8rv3/vgAArzsPhLXxdy4AY93pPjbE3MoAexT/tQAAqkAApjEAqDoAfy4AV9cApzb/7s8Ah///+ezP69gsh/zqPS4AeADs+PBgwX7/1oT/6b//2Iz/9uW04MH/4qzpLBcAXtkPiDXo9u0UpEn/9+gMrkwwtF0gsVT/viCZ1av/3Jn/zmqM0aFzyI3/wjjX79//8ddSvXT/yFIVbd3pNSMlctz63Nra6d6oy7BfpG9OnWI8lVOrpSHQsCESjzxhlC/tuBiOnyw+jTFwmC+coymu3rzDrSQSjDo0jDGDnCytpyf/0XPuuBhbwHp+zJb/yVdBuGiS06b/xUM3krxoqO2Pr+j5dxfyiVe6daPsYFlbj+LveHGbg8Pyl5KwxvD2vLng6vl2it/ObYVNjvZvmuXfX2Twh4GbuOypebD4zcrqU0eIgs/AbpPK2vXTYnT2vbriVVbzpaCRbLWZv/1mov220P67/LOcAAAJNklEQVR4nO2di3sUNRTFd3aqpWql7e5SCt1ueZQK2JZ3gbbyFARFUbQ8FAVUrICKKL4q/7u7nWa6M3OTucm9Seb7zO8PSPd8J3tP5mQWarVAIBAIBAKBQCAQCAQCAUHn3HYtznV8f2INOucvDEyNaDI1cvH8Id+fHMX2i1MjA0aMTF3a7vvTl7J4acpM3abGSzt9K1Cz2jhM0TfQujy6x7cGBZ35Zn3uIEXgzaFo9NQu3zpkHKqP1et1ioWt96Me7/pWAtMZ6+mr16+YC7w6tCEwqqaHC4m++py5gR8k+qIjvrVATDfrm5ha2LoWCW77VlNkpiH0mc+ZoVTg6F7fegrU+zCbM62Poz5868lzt9mv8BMTgdeH+vSN7vOtKEtnvE61cDMiUoXVmqTTYxmBJnPmw6GMwOi4b0397G5k9dXnWtoGfp7VF41W6VQ6nzNQf5O2PorynPKtaosb43l92lFxcKggcPSAb10pBf+0LcxGRNWiYrUJCNSLiutFA7sWVuTJ6VB+wuhbmB5Ccwqr8VhxBtqhelHxKWRgVJEjaSEi9KOidQTWV42oWJDow2/S1mcSfZV4bjoKTpjEQmRU3JRs0J6Fx3zrq8n1YS3MHUJzCn3rW5VMGI05c1VuYJdbfvUtyiYMfs5IIiK1cL9XgXeUBmIsbF1TGhhF93zqm1EbiCmgWiX6/LYXcyX6yueMIiJS/OlTRERKSVQoIiK10FtUdIpPSboWKiMiVeirvThZMmESlHMm31PAeGovSiJCoIqKQk8hsfC0F4HFnkLXQqCngPHSXsxgvoEbFsrnDGqDRp7aC6S8unzOwD0FjHt9JxARIZC0F2BPIbHQedHdwU0YlYUlh9CcQtdRka+y1YBzBhcRAsfthbSngIGiQtpTSCx0217Ma+mDNik6IgRO2wugyi6xsBAVQJVdYqHLqNCYoBILdSJC4E4fXGWryUWFuqeALXRWdEuq7BILM3NGKyJSha7aC1mVrSYTFbIqW81ZN/o0I0LQHxWaEZFa6CYq5FW2mq05g+kpQJxExVHdiEgtTKMC0VNILHTRXhhM0JyFqJ5CotC+PlxPAXPFOCJSrBfdyJ4CJpkzyJ5CYqHt9qKsyi63sO+VOxMsF92lVXaJhb05Q9igkfWiu7zKVnN4oHWZpC+yeyTFVNlqDmr0FBILLUaFVk8hsdDkEJpTaK+9oEREwtj0cbJAe0U3KSISxju7RukW2ooKbJUtp3m3VttHV2ip6EZX2Qp665D12WovyP7Vx2d66+ylW2glKnSqbJixO8lKp+gWWii6GSKisZgsdZphzvBHxRf0iDgp1mKICvai27Cn6Gc8/RUrR1RwtxemPcUWzaNbqx2jK2RuL7Sr7CJz/euR9XFHBT0iGjP961UtKkyq7CwiIgT36BYyFt1GVXbOwMXskvsZ5gzfG91mVXbGwJP5NW+RBfJFBUNENIurVigqeCNCcKAyUWFcZW+xAK1rdj+RsZAlKlCv3Klp7IYW3smwSTkEMvQUZ+CVz9IFMkQFQ0/RkPwrIxxRQb8TpVXZPZqrsrX30BWS70QZeoox+epkffSimyyvPn5Dvrr/qLhLPoTCESFgiApS0W0tIgS+o0LvlTuIsWn1X7hNFki5E2XtKWD8Ft0MVfaJsr/BUHQb34ky9BSKiBCQ9ZlHBVeVrYYhKgzbC4Yqex7zdxiKbqOosNBTwPgqujmrbDV+7kQdRITAT1TY6SlgGIpu7ajgrrLVkPXpRwX9kN1ARITAfdHNX2WrYSi6te5EnUWEwHVU2Kiy1TAU3RpRYafKVrKLLlAjKqiv3OlEhIAhKtCvz9BfuVP3FDDuim7rPQWMu6iwV2WrYSi6UVFhscpWw1F0Y6LCZpWthqHoRtyJMlTZuhGR4uROlCxPWWWrcVF0M1TZqJ4Cxn5UeIoIAUPRXRIV9qtsNfSiW30nynAIbZD+4wiO9kL1+oyLKlsNQ9GtiAqut7IpkPWpooJeNGGqbDUMUSEtoHaTDcRV2WoYim7Zmwn0EarXU8AwtBeyQUo3cJquj6Xohhem71Bsla2GHhWSpCA/yOv3FDDk9kLSAtMfdHn00aNCcp1G7QrpESEgtxfwewkLb9DQqrLV3BuiAVekX75J46ttbNz/+i0S34ACV4ZJLA0y8mD5bQLth6DAR8OvUZiMGZl8nUL7W1DgfZJAVn1x/N0sReD3oMDH7xD0LTELnPyrbS5w+QdQ4NqO6hgYxz8SLJx9DxRYI+hb4dYXTzxZNlcI66vdN9+j7AbG8VNjCyVfQcoe5Tewa+EDUwtlO9Q8KLgnTMLkC7M5IwkJioVW9MXxb2abVG5grfbMyEI7BnY36U8mFrZ/luur1YwstKTPMCpmVfpqvxgMUhsTJsEkKpb/VgqsLVXIwG5UGAxStb7aS+1Nas/AroXPdRXO/loiUDsqbE2YBN2okDwo9aMbFVb1aUeFKiIEz7TmjF0DdaNiWXZIy6C1Ry3r0zySLmP0aT0X2pwwCRO/4+eM5DmwwEqFDOzOGfQebb/A6dOICgf64vg5dpOWR4QAGxW2J0zCxEOch4qniDzYqHCiDx0Vsxqv/OKe7Zfc6Isn/sBYiIsIAWqPOjIQGRVtHX21x4hNaj8iBJj2YvlPLYGYqHBmICYq0BEhKI8Kh/oQRTfmEJqlrL1wExGCiZKiW91TwJRY6FRfaXuh7ilg1FHhbsIkqKOirKeAqZKBZVFhok85Z1wbqI4K/CE0y9OKTJgE+Z0ooqeAkR9JPehTRIV+RAhkUeHqEJpFFhUmESGQDFIvBkqjAtdTwMBFt/sJkzDxBLLQLCIE4JHUk4HdOQMNUt1DaBYoKrzpA4tu04gQFNsLHxGRKixOGHxPAVOMCo/6gPbCPCIE+SOpn4gQ5ItuvZ4CZrhCBhaOpHo9BUy2vfAVEYJs0Y2tstWsVMjAbFRo9xQw/VHhXV8mKugTJmHrQs1nRKQK0ztRjgmTsDJcGQPjrahg2qAbDFdjwiRsthdtjgkqWBuujoGbUdFuM30BNxUuDVfFwCQq2mY1jIJHO6piYK/onqUeQQEex4O+hQkG/2EJ+ALrg4MV0Nj9DOtW5PV49S/njyOMiLe9tCZvg7VX63y/cNFl/dWaXXWBQCAQCAQCgUAgEAgEAoFA4H/Af8xC5lvDMAx6AAAAAElFTkSuQmCC" />
        <el-avatar @click="dialogVisible7" style="margin-top:0%; width: 1.2cm; height: 1cm; margin-left: 10%;" src="data:image/png;base64,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" />
      </el-row>
      <el-row>
        <span style="font-family: Arial; font-size:16px; margin-left: 8%" >Meet</span>
        <span style="font-family: Arial; font-size:16px;  margin-left: 17%" >Drive</span>
        <span style="font-family: Arial; font-size:16px; margin-left: 9%" >Sheets</span>
      </el-row>
 
  </el-dialog>

            <el-menu-item index="8" style="margin-left: 135%; margin-top: -6%">
              <el-avatar @click="dialogVisible4=true" :src="account" />
            </el-menu-item>
          </el-row>

          <el-dialog
          v-model="dialogVisible4"
           style="width:10cm; height:9cm; margin-left:75%; margin-top: 4%; border-radius: 0.2cm;"
           :show-close="false"
          >
          <el-row style="margin-top: -10%; margin-left: 6%;">
            <el-col>
            <el-avatar 
            src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7642fb7f-8c3b-4423-a3a7-dddb47be03b0/icon-design-22-opt.png"/>
          </el-col>
          <el-col>
            
            <el-main style="margin-top: -23%; margin-left: 10%; font-family: Arial, Helvetica, sans-serif;" >
                <p style="margin-top:5%">
                  <b>Gowtham</b>
                </p>
                <p style="margin-top:-3%">gowthamsenthil1708@gmail.com</p>
              </el-main>
          </el-col>
        </el-row>
        <el-row style="margin-left:20%; margin-top:-5%; margin-bottom: 5%;">
          <el-button type="plain" >
            <b>Manage your Google Account</b>
          </el-button>
        </el-row>
        <hr />
        <el-row style="margin-top: 0%; margin-left: 6%;">
            <el-col>
            <el-avatar 
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a78a35e16189b129aebdc4/0x0.png"/>
          </el-col>
          <el-col>
            
            <el-main style="margin-top: -23%; margin-left: 10%; font-family: Arial, Helvetica, sans-serif;" >
                <p style="margin-top:5%">
                  <b>AvowS Training</b>
                </p>
                <p style="margin-top:-3%">training@avowsolutions.com</p>
              </el-main>
          </el-col>
        </el-row>
        <el-row style="margin-top: 0%; margin-left: 6%;">
            <el-col>
              <el-icon size="25px"><User /></el-icon>
          </el-col>
          <el-col>
            
            <el-main style="margin-top: -23%; margin-left: 10%; font-family: Arial, Helvetica, sans-serif;" >
                <p style="margin-top:11%">
                  <b>Add another account</b>
                </p>
              </el-main>
          </el-col>
        </el-row>
        <el-row style="margin-top: 0%; margin-left: 6%;">
            <el-col>
              <el-icon size="25px"><TurnOff /></el-icon>
          </el-col>
          <el-col>
            
            <el-main style="margin-top: -12%; margin-left: 10%; font-family: Arial, Helvetica, sans-serif;" >
                <p style="margin-top:-3%">
                  <b>sign out</b>
                </p>
              </el-main>
          </el-col>
        </el-row>
        <el-row style="margin-left:20%;margin-top:-10%; ">
          <p>Privacy Policy</p>
          <p style="margin-left:20%; ">Terms of Service</p>
        </el-row>
          </el-dialog>
        </el-menu>
      </el-header>



      <!-- ICONS -->
      <el-container >
        <el-header style="margin-top: 1.5%; margin-left: 10%;">
          <el-row>
            <el-button style="min-width: none;">
                <el-icon style="margin-left: -10%;"><PriceTag /></el-icon>
            <el-icon style="margin-left: 50%;"><CaretBottom /></el-icon>
        </el-button>
   
        <el-icon style="font-size:20px; margin-left:1%; margin-top: 0.35%;"><Refresh /></el-icon>
        <el-icon  style="font-size:20px; margin-left:1%; margin-top: 0.35%;"><More /></el-icon>
        <span style="font-size:16px; margin-left:70%; margin-top: 0.35%;">1-50 of 5000</span>
        <el-icon  style="font-size:20px; margin-left:1%; margin-top: 0.35%;"><ArrowLeft /></el-icon>
        <el-icon  style="font-size:20px; margin-left:1%; margin-top: 0.35%;"><ArrowRight /></el-icon>
        <el-button style="margin-left: 1%;">
        <el-icon style="font-size:20px; margin-left:2%; margin-top: 0.35%;"><CreditCard /></el-icon>
        <el-icon style="margin-left:auto"><CaretBottom /></el-icon>
        </el-button>
          </el-row>

          <!-- 3 button -->
          <el-row style="margin-top: 1%;">
            <el-button style="width:15%; height: 1.25cm;" text="plain">
                <el-icon style="margin-left:-90%; margin-right: 20%;"><Cellphone /></el-icon><b>Primary</b> 
            </el-button>
            <el-button style="width:15% ;height: 1.25cm;" text="plain">
                <el-icon style="margin-left:-60%; margin-right: 20%;"><CollectionTag /></el-icon>
                <b>Promotion</b>
            </el-button>
            <el-button style="width:15% ;height: 1.25cm;" text="plain">
                <el-icon style="margin-left:-100%; margin-right: 20%;"><Coin /></el-icon>
                <b>Social</b>
            </el-button>
          </el-row>
        </el-header>

        <!-- Side Icons -->
        <el-aside class="icons">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            @mouseenter="isCollapse = false"
            @mouseleave="isCollapse = true"
          >
            <el-menu-item index="1">
              <el-icon style="font-size: 30px; margin-top: 0%; margin-left: 0%"
                ><Edit
              /></el-icon>
              <span @click="dialogVisible2 = true" style="margin-left: 5%">Compose</span>
            </el-menu-item>
            <el-dialog
    v-model="dialogVisible2"
    style="width:15cm; height:12cm; position: fixed; margin-left:60%; margin-top: 18%; margin-bottom: 5%; border-radius: 0.2cm; backgroundColor= grey;"
    title="New Message"
    
  >
  <el-header style="margin-top: -16%">
    <el-icon style="font-size:16px; margin-left: 90%; margin-top: 0%;"><SemiSelect /></el-icon>
    <el-icon style=" margin-top: 5%;font-size:16px; margin-left: 2%;"><Rank /></el-icon>
  </el-header>
  <br />
  <el-row>
    <span style="font-size:16px; margin-left: 2%;font-family: Arial;">To</span>
  </el-row>
  <hr />
  <el-row>
    <span style="font-size:16px; margin-left: 2%;font-family: Arial;">Subject</span>
  </el-row>
  <hr />
  <el-footer>
    <el-row style="margin-top:58%;margin-left: -5%;">
      <el-button type="primary" style="border-radius: 2cm;">
        send <el-icon style="margin-left:20%;"><CaretBottom /></el-icon>
      </el-button>
    
      <span style="font-size:20px;margin-left: 2%;"><b>A</b></span>
      <el-icon style="margin-left: -2.8%;margin-top: 3%;"><SemiSelect /></el-icon>

      <el-icon style="font-size:20px;margin-left: 2%;"><Link /></el-icon>
      <el-icon style="font-size:20px;margin-left: 2%;"><Picture /></el-icon>
      <el-icon style="font-size:20px;margin-left: 2%;"><CreditCard /></el-icon>
      <el-icon style="font-size:20px;margin-left: 2%;"><Microphone /></el-icon>
      <el-icon style="font-size:20px;margin-left: 2%;"><Folder /></el-icon>
      <el-icon style="font-size:20px;margin-left: 2%;"><Folder /></el-icon>
      <el-icon style="font-size:20px;margin-left: 2%;"><More /></el-icon>
      <el-icon  style="font-size:20px;margin-left: 35%;"><Delete /></el-icon>
    </el-row>
  </el-footer>
</el-dialog>

            <el-menu-item index="2" @click="starred=false">
              <el-icon class="righticon"><Message /></el-icon>
              <span style="margin-left: 5%" >Inbox</span>
            </el-menu-item>

            <el-menu-item index="3" @click="fnStar">
              <el-icon class="righticon" >
                <Star v-show="!starred" />
                <StarFilled v-show="starred" />
              </el-icon>
              <span style="margin-left: 5%">Starred</span>
            </el-menu-item>

            <el-menu-item index="4">
              <el-icon class="righticon"><Clock /></el-icon>
              <span style="margin-left: 5%">Snoozed</span>
            </el-menu-item>

            <el-menu-item index="5">
              <el-icon class="righticon"><Position /></el-icon>
              <span style="margin-left: 5%">Sent</span>
            </el-menu-item>

            <el-menu-item index="6">
              <el-icon class="righticon"><Document /></el-icon>
              <span style="margin-left: 5%">Drafts</span>
            </el-menu-item>

            <el-menu-item index="7" @click="dialogVisible5=true" >
              <el-icon  class="righticon" ><ChatSquare /></el-icon>
              <span style="margin-left: 5%">Chat</span>
            </el-menu-item>
  
            <el-menu-item index="8" @click="dialogVisible6=true" >
              <el-icon class="righticon"  ><UserFilled /></el-icon>
              <span style="margin-left: 5%">Spaces</span>
            </el-menu-item>
            

            <el-menu-item index="9"   >
              <el-icon class="righticon"  ><VideoCamera /></el-icon>
              <span style="margin-left: 5%">Meet</span>
            </el-menu-item> 
          </el-menu>
          
          
          
          
          
          
          
          
          
          <el-dialog
    v-model="dialogVisible5"
    style="width:8cm; height:17cm; position: fixed; margin-left:5%; margin-top: 5%; margin-bottom:0%; border-radius: 0.2cm;"
    :show-close="false"
  >
<el-header style=" margin-top:-10%">
  <el-row>
    <el-icon style="font-size:22px; margin-left:5%"><b><ChatSquare /></b></el-icon>
    <p style="margin-left:10%; font-size:20px; font-family:Arial; margin-top:-1%"><b>New Chat</b></p>
  </el-row>
</el-header>
<hr style="margin-top:-10%"/>
<el-main style="margin-top:85%">
  <el-icon style="font-size:40px; margin-left:35%"><b><ChatSquare /></b></el-icon>
  <br />
  <span style="margin-left:22 %">No conversations</span>
  <br />
  <h2 style="margin-left:20%; color:blue;">Start a chat</h2>
</el-main>
</el-dialog>
  <el-dialog
    v-model="dialogVisible6"
    style="width:8cm; height:17cm; position: fixed; margin-left:5%; margin-top: 5%; margin-bottom:0%; border-radius: 0.2cm;"
    :show-close="false"
  >
  <el-header style=" margin-top:-10%">
  <el-row>
    <el-icon style="font-size:22px; margin-left:5%"><b><Plus /></b></el-icon>
    <p style="margin-left:10%; font-size:20px; font-family:Arial; margin-top:-1%"><b>New Space</b></p>
  </el-row>
</el-header>
<hr style="margin-top:-10%"/>
<el-main style="margin-top:85%">
  <el-icon style="font-size:40px; margin-left:35%"><b><Collection /></b></el-icon>
  <br />
  <span style="margin-left:25%">No Spaces yet</span>
  <br />
  <h2 style="margin-left:1%; color:blue;">Create or Find a space</h2>
</el-main>
</el-dialog>












        </el-aside>
        <el-main style="margin-left: 10%; margin-top: -43%">
          <el-table v-show="!starred" :data="tableData" stripe style="width: 100%; font-family: Arial, Helvetica, sans-serif; font-size: 16px;">
            <el-table-column  width="120">
      <template #default="scope"><el-icon v-show="scope.row.checked==false"><CircleCheck /></el-icon>
        <el-icon v-show="scope.row.checked==true"><CircleCheckFilled /></el-icon></template>
    </el-table-column>
    <el-table-column  width="120">
      <template #default="scope"><el-icon v-show="scope.row.stared==false"><Star /></el-icon>
        <el-icon v-show="scope.row.stared==true" ><StarFilled /></el-icon></template>
    </el-table-column>
            <el-table-column prop="address"  />
            <el-table-column  width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
          </el-table>
          <!-- Starred Table -->
          <el-table v-show="starred" :data="tableDataStar" stripe style="width: 100%; font-family: Arial, Helvetica, sans-serif; font-size: 16px;">
            <el-table-column  width="120">
      <template #default="scope"><el-icon v-show="scope.row.checked==false"><CircleCheck /></el-icon>
        <el-icon v-show="scope.row.checked==true"><CircleCheckFilled /></el-icon></template>
    </el-table-column>
    <el-table-column  width="120">
      <template #default="scope"><el-icon v-show="scope.row.stared==false"><Star /></el-icon>
        <el-icon v-show="scope.row.stared==true" ><StarFilled /></el-icon></template>
    </el-table-column>
            <el-table-column prop="address"  />
            <el-table-column  width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
          </el-table>
        </el-main>
      </el-container>

    </el-container>
  </div>
  <el-affix position="bottom" style="margin-left: 98%;" :offset="20">
    <el-button type="type" @click="dialogVisible3=true"><el-icon><CaretLeft /></el-icon></el-button>
  </el-affix>

  <el-dialog
    v-model="dialogVisible3"
    style="width:2cm; height:15cm; position: fixed; margin-left:95%; margin-top: 5%; margin-bottom: 5%; border-radius: 0.2cm; background-color= grey;"
    :show-close="false"
  >
  <el-row>
    <el-avatar style="margin-top: -100%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/2048px-Google_Calendar_icon_%282020%29.svg.png"/>
    <el-avatar style="margin-top: 100%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/1200px-Google_Keep_icon_%282015-2020%29.svg.png"/>
    <el-avatar style="margin-top: 100%;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Tasks_2021.svg/1200px-Google_Tasks_2021.svg.png"/>
    <el-avatar style="margin-top: 100%;" src="https://e7.pngegg.com/pngimages/277/785/png-clipart-computer-icons-google-play-android-google-contacts-others-miscellaneous-blue.png"/>
    <el-avatar style="margin-top: 100%;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4j3kWTjff8ZQAcFccOx1Dccwuvi7tcip_uoa8ALPP7YU8GhSrd3cvuxy2PWChyW2vJE&usqp=CAU" />
  </el-row>
  </el-dialog>

</template>
<script lang="ts">
import { ref } from "vue";
import { ElMessageBox } from 'element-plus'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
Plus,
} from "@element-plus/icons-vue";

export default {
    name: "MainPage",
    data() {
        return {
            circleUrl: "https://storage.googleapis.com/proudcity/santaclaracountycacities/uploads/2021/07/333-3335189_menu-three-horizontal-lines-symbol-free-icon-logos-with-horizontal-lines.jpg",
            account: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7642fb7f-8c3b-4423-a3a7-dddb47be03b0/icon-design-22-opt.png",
            green: "data:image/jpeg;base64,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",
            gmailImg: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1440x810.format-webp.webp",
        };
    },
    setup() {
        const array = ref([]);
        const isCollapse = ref(true);
        const activeIndex = ref("1");
        const activeIndex2 = ref("1");
        const dialogVisible1 = ref(false);
        const dialogVisible2 = ref(false);
        const dialogVisible3 = ref(false);
        const dialogVisible4 = ref(false);
        const dialogVisible5 = ref(false);
        const dialogVisible6 = ref(false);
        const dialogVisible7 = ref(false);
        const starred = ref(false);
        const tableDataStar = ref([]);
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };
        const tableData = [
            {
                date: "17 Feb",
                address: "Career Development Program on Required Skills for Competitive Exam",
                checked: false,
                stared: false
            },
            {
                date: "16 Feb",
                address: "Updates to Google Play Terms of Service",
                checked: false,
                stared: true
            },
            {
                date: "15 Feb",
                address: "Flat 80% off on DSA course | A special Scholarship!",
                checked: true,
                stared: false
            },
            {
                date: "14 Feb",
                address: "Flat 90% off on DSA course | A special Scholarship!",
                checked: false,
                stared: false
            },
            {
                date: "13 Feb",
                address: "Invest in Indore Municipal Corporation NCD",
                checked: true,
                stared: false
            },
            {
                date: "12 Feb",
                address: "Dear gowth ,5 in 1 Internship Combo offer is Back🧡🧡Valentines Day Offer🧡🧡Gift Your Loved ones with an Internship",
                checked: false,
                stared: true
            },
            {
                date: "11 Feb",
                address: "What are the PSUs from where I (air -253 in EE) can expect an interview call?",
                checked: true,
                stared: false
            },
            {
                date: "10 Feb",
                address: "Protean - Intimation of Contribution Credit under APY",
                checked: true,
                stared: true
            },
            {
                date: "9 Feb",
                address: "Register here for 30 Day's Machine learning master class series on Feb 13th🔥. Only 2000 seats Left. Final call",
                checked: false,
                stared: false
            },
            {
                date: "8 Feb",
                address: "Get usage-based suggestions to improve MongoDB query performance",
                checked: false,
                stared: true
            },
            {
                date: "7 Feb",
                address: "Research Webinar to Get Maximum out of India's Growth Story",
                checked: true,
                stared: false
            },
            {
                date: "6 Feb",
                address: "Up to ₹7000 Off* on Flights & Hotels!",
                checked: false,
                stared: true
            },
            {
                date: "5 Feb",
                address: "How was your BARC interview experience (electrical)?",
                checked: false,
                stared: false
            },
        ];
        const fnStar = () => {
            tableDataStar.value = [];
            for (const e of tableData) {
                if (e.stared == true) {
                    tableDataStar.value.push(e);
                }
            }
            starred.value = true;
        };
        return {
            isCollapse,
            handleClose,
            handleOpen,
            activeIndex,
            activeIndex2,
            handleSelect,
            tableData,
            dialogVisible1,
            dialogVisible2,
            dialogVisible3,
            dialogVisible4,
            dialogVisible5,
            dialogVisible6,
            dialogVisible7,
            array,
            starred,
            fnStar,
            tableDataStar
        };
    },
    components: { Plus }
};
</script>
<style scoped>
.icons {
  /* background-color: rgb(176, 230, 240); */
  margin-top: -5%;
  width: 170px;
  height: 19.5cm;
  margin-left: 0%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 700px;
}
.header {
  /* background-color: rgb(190, 194, 195); */
  /* width: auto; */
  margin-left: -2%;


  margin-right: 0%;
}
.gimg {
  width: 1.25cm;
  height: 1.25cm;
  margin-left: 0%;
  margin-top: 0%;
  margin-bottom: 1%;
}
.iconsList{
  margin-left: 100%;
  width:30%
}
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.gmail {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 10%;
  margin-top: 20%;
  font-size: 26px;
}
.search {
  width: 35%;
  height: 1.25cm;
  margin-top: 0.25%;
  margin-left: 10%;
  border-radius: 1%;
}
.active {
  margin-top: 0.5%;
  margin-left: 0%;
  width: 4cm;
  height: 1cm;
  border-radius: 12cm;
}
.righticon {
  font-size: 20px;
  margin-top: 0%;
}
.main {
  margin-left: 0%;
}
</style>
