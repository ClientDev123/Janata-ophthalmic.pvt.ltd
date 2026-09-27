function ChangeHeader(TargetElementSelector,TargetHeight,ClassActionSeletcor){
    window.addEventListener('scroll',()=>{
            if(window.scrollY>=TargetHeight){
                document.querySelector(TargetElementSelector).classList.add(ClassActionSeletcor);
            }else{
                document.querySelector(TargetElementSelector).classList.remove(ClassActionSeletcor);
            };
        }
    );
};

function ToggleNavabr(EventElementSelector,Event,TargetElement,ClassToggleSelector){
    document.querySelector(EventElementSelector).addEventListener(
        Event,()=>{
            document.querySelector(TargetElement).classList.toggle(ClassToggleSelector);
            document.querySelectorAll('.nav_links').forEach((link)=>link.addEventListener('click',()=>document.querySelector(TargetElement).classList.remove(ClassToggleSelector)));
        }

    );
};

function AddPhotosOfDoctor(){
    let DoctorPhotoHTML='';
    for (let index = 1; index <4; index++){

        const TempDoctorPhotoHTML=`
        <div class="Certificate fly_hover">
            <img src="/images/Document_${index}.jpg" alt="Document ${index}">
        </div>
        `;
        DoctorPhotoHTML+=TempDoctorPhotoHTML;
    };
    document.querySelector('.Certificates_div').innerHTML=DoctorPhotoHTML;
};

function GetMessageFromForm(){
    document.querySelector('.Conatct_form').addEventListener(
        'submit',(event)=>event.preventDefault()
    );
}

class MyScript{
    HeaderChange=()=>ChangeHeader('.nav_header',window.innerHeight,'scrolled');
    HamburgerChange=()=>ToggleNavabr('.hamburger','click','.nav_list','shown');
    ShowPhoto=()=>AddPhotosOfDoctor();
};

const Script=new MyScript();
Script.HeaderChange();
Script.HamburgerChange();
Script.ShowPhoto();