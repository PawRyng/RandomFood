export default function loader(){
    const used = window.localStorage.getItem("used");
    return {used}
}