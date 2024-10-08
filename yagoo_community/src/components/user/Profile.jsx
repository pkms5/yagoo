import Header from "../common/Header";
import Footer from "../common/Footer";
function Profile(){
    return(
        <>
            <Header></Header>
            <div>
                <h3>프로필</h3>
                <img />
                <form>
                    <p>아이디</p>
                    <input type="text" placeholder="4~15자 이내로 입력해주세요"></input>
                    <p>이메일</p>
                    <input type="email" placeholder="admin@yagoo.com"></input>
                    <p>이름</p>
                    <input type="text" placeholder="홍길동"></input>
                    <p>닉네임</p>
                    <input type="text" placeholder="15자 이하로 입력해주세요"></input>
                    <p>응원팀</p>
                    <select name="응원팀 선택">
                        <option value='KIA'>KIA</option>
                        <option value='두산'>두산</option>
                        <option value='롯데'>롯데</option>
                        <option value='삼성'>삼성</option>
                        <option value='SSG'>SSG</option>
                        <option value='NC'>NC</option>
                        <option value='LG'>LG</option>
                        <option value='KT'>KT</option>
                        <option value='키움'>키움</option>
                        <option value='한화'>한화</option>
                    </select>
                    <input type="button">저장</input>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Profile;