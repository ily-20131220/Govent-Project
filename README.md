### 網站技術
 * #### 前端使用React.js/Next.js、HTML、SCSS、JS
 * #### 後端使用Node.js/Express.js、MYSQL

### 網站功能
* #### 登入頁面
    * ##### google第三方登入
    * ##### 會員登入、註冊、忘記密碼、修改密碼
    * ##### nodemailer 寄送email驗證碼
    * ##### JWT驗證登入身分
* #### 會員中心、主辦單位
   * ##### 會員升級主辦單位(可新增活動)
   * ##### 新增優惠券、查看訂單、會員等級
* #### 活動頁面
   * ##### 活動列表(篩選、搜尋、排序)、收藏
* #### 活動詳細頁面
   * ##### 新增商品至購物車、連結google地圖
* #### 購物車、結帳
   * ##### useState來控制商品勾選狀態
   * ##### Localstorage來儲存勾選內容
   * ##### 製作購物車useContext讓網站可以共享購物車的資料
   * ##### useState來儲存總金額、回饋點數、點數折抵、優惠券的選擇。
   * ##### 使用ReactHookForm來監聽表單輸入的內容，如果不符合欄位的規定會跳出錯誤提示。
   * ##### Props將即時更新的金額丟給子元件即時更新金額
   * ##### component製作input check元件減少重複程式碼
   * ##### useRef控制點數折抵、優惠券輸入的內容
   * ##### 串接LinePay、綠界支付
   * ##### NodeMailer+Google SMTP來寄送付款完成通知

 
### 使用方式
##### 將Govent.sql匯入資料庫，前端及後端使用npm -f install、npm run dev啟動伺服器就可使用了
