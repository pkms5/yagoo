import Header from '../common/Header';
import Footer from '../common/Footer';
import Category from '../common/Category';
import CommunitySearch from './CommunitySearch';

function CommunityMain(){
    return(
        <>
        <Header></Header>
        <div>
            <Category></Category>
            <ul>
                <CommunitySearch></CommunitySearch>
                <li>
                    <a>최신순</a>
                    <ul>
                        <li>최신순</li>
                        <li>추천순</li>
                        <li>댓글순</li>
                        <li>조회순</li>
                    </ul>
                </li>
                <li><a>글 작성</a></li>
            </ul>
            <ul>/*여기반복*/
                <li>
                    <div>로고</div>
                    <div><img></img><p>이름</p></div>
                    <ul>
                        <li><a>제목</a></li>
                        <li>눈<p>눈 숫자</p></li>
                        <li>따봉<p>따봉 숫자</p></li>
                        <li>댓글<p>댓글숫자</p></li>
                    </ul>
                </li>
            </ul>
            <div>
                <div>이전</div>
                <div>
                    <ul>/* 여기가 이제 페이징처리 */
                    </ul>
                </div>
                <div>다음</div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default CommunityMain;