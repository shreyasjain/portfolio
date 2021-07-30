import React from 'react'
import ReactDOM from "react-dom"
import "../Styles/Projects.scss"
import { Container } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

const PostsData = [
      {
      "category": "Travel",
      "title": "RoleIt Website",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "News",
      "title": "  Table Tennis WebApp",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Live Weather API",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "COVID Tracker",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "BlackJack Game",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    }
    // ,
    // {
    //   "category": "Travel",
    //   "title": "Nomad Lifestyle",
    //   "text": "Learn our tips and tricks on living a nomadic lifestyle",
    //   "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    // },
    // {
    //   "category": "Development",
    //   "title": "React and the WP-API",
    //   "text": "The first ever decoupled starter theme for React & the WP-API",
    //   "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    // }
  ]
  
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div className="custom-container projects-container">
          
        <header className="app-header" id="projects"></header>
        <h1 className="page-main-heading">#PROJECTS</h1>
        {/* <Container> */}
        <div className="app-card-list projects-list" id="app-card-list">
        <ProjectCard title="RoleIt Website" github="https://www.roleit.in/" link="https://smc.roleit.in/wbr/roit0web/med02/logo.svg"/>

          <ProjectCard title="Table-Tennis WebApp" github="https://github.com/shreyasjain/TTTWebApp" link="https://image.freepik.com/free-vector/realistic-table-tennis-wallpaper_23-2148648472.jpg"/>
          <ProjectCard title="Memories App" github="https://memories-sj.netlify.app/" link="https://images.theconversation.com/files/76631/original/image-20150331-1256-mz95ed.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"/>
          <ProjectCard title="Live Weather API" github="https://weatherapi-shreyas.herokuapp.com/" link="https://i.pinimg.com/originals/94/76/5c/94765cc674ee3688fb3fa6478dc435aa.png"/>
          <ProjectCard title="BlackJack Game" github="http://www.github.com/shreyasjain" link="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Fv2k1TVc-Uc9LIkFen7P0YBYRQQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/SSNIXYRINUI6JNI7ZJVNNGF7NE.jpg"/>
          <ProjectCard title="COVID-19 Tracker" github="http://www.github.com/shreyasjain" link="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIVFRUXFRUXFRUYFxYVFxYVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EADoQAAIBAgQDBgQEBgICAwAAAAECEQADBBIhMQVBUQYTImFxkTKBobEHFMHwI0JSYtHhcoIVM2Ois//EABsBAAMBAQEBAQAAAAAAAAAAAAIDBAEABQYH/8QAMhEAAgICAQMDAwMDBAIDAAAAAAECEQMhEgQxQRMiUTJhcYGR8BSxwQUjofFC4TNSYv/aAAwDAQACEQMRAD8Axxc9T715p9I0dnPU+9EhbQuc9T70SFMXOep96JCmdnPU+9GhMjs56n3o0KY4Oep962zKJODJJ3NFi27FZtIn3bhCkyapk6jZClbogm4Y3NS2xrRO4eTlmTqarwr2kWd+4acae9yyY2+fOuWT/c4gPF/tcixJJ5mqERNsoXvkZtYgn70mOkVuN0OwOGuOM0n1mn41qxGbKouhcPw+4WIJ+E6mTrzpqivIrJ1CUdFtw6wVLEyNhvyG5/fSidEGbI5UkwvDLjMGYn4mJHpyoGqRmbTUfhFIQ3eZM2uaJmkqNui/n7OQ7EYhs5k6jTTbTSgltnQXtVBcNezMAWI856Cf0pdGTtKxrYgnmfehoNKhyEZWJJnSBPXf9+dYzrdoC5PU+9CMTY22+okmJE+k61wTutHXrssSsgSYEnQcqE2NpKxhc9T71gZJxmKlLaQVKgzO5J5+lDW2wMUXblfchG4ep960eLbzMQBJJ0Ams7GSlStlhxjGuxVWGXKNp+tKhFK2n3EdPBRVp3ZADnqfejY6w+ER3dVUmZ+2tBJpK2BkklF2WHGcTckK+kdOdT41HuhWBKrRXK56n3omUWFVz1PvSmdZecJsuEzgnXl6VLlkrojyzuVfBBxNxixkma1dtFEdLRq+zWGK2sx3bX5cv3515vV5LnXwSZJ8pFwDUbbBPGGr6g/S2dRIUzqIUzprbFM6aNCmcokxRLYtlpawwiqlBEkpsJbsZdq2MFHsLnNy7gsQ8mOlLyyt0ZGNKwZFLbowNaxIUelMj1UYx2T5MLkyALhDBv7ppMMnuT+42UE4tfY0Vm4GAIr1k7VnjTTTozuIk7DVm+5qaTel8l0aX6Gmw1rKoXoAKsSrR42SXKTYVRRiJEPjGJyJA3bw+gjU/vrTMceTCwY+U7+CTgFC2h0iflvQZO4rI3KbM5h7ql2ZyeZ06naheOj0ppqKUQIekNDaD2XWGkawAvrIk+00DMadqjrbUDNaJLOMoEayST1mI+31oGAk7YJjQDELhruUlsswpHkCwgE+9bWjpK6Vkea4aPsqWYADMZ26+VZ22dJpLYTiWJa5cLFY5RvEaRNBGNKjMUFCNIjBDMQZ6RWjeSJnCbVzvAyJOXXXQdN/nQTa40xWeUePFvudjjcdy7IRJgb8uQoYpRVIzHxjHimD/KPIGUyeVdyQXqRq7LDhGFui5IXVRrPnScso8dvuJzTg40JjLV267Ertp5UEeMY9zYShCKVgbOAuGSF2rJTihjyxQazgHImKVKaRjyxTovbFi4lqPKo5yjKRK3GUrK/DcPe42vM0c5xih0sqS0bi2oAAGw0rxpO3ZKiFxa8wACbz9KPDFN7DjXk8pO9fRH6UzqJCpHUaEsWiQpnUaFSJOEt6zTsa3YjI9FolOJmdcaBWt0hVWyIBSqNkwgAoXQt2IcvlQOWPy0A7BXAvUUzHLG33QL5FnIVPQVfpI81+6REwCqz6fy+XXaug4t68BZ3KMd+S3FNPPkdbcHb09t6JCpKiux+IU3QmTMVE8uf7FPx9huPG1DldWWllgVB5ED2ikS7krTTozxxQFskWRlbQGeYnlFUOFurPQWNudOW0AbHrr/BTdT6RuPnS5YRqwy/+zCvjIVZtIAzd4B1AlYjpvU0ob/Bkcdt+56VA1xmoAtpOfNtvOyelKcRnp/8A6fb+MNiOIGSGRAQw2G2XTLv8OlKryZDEqtN/zyCfGTm8KDNGw+GP6elZQax1W3okjiLqubu7YV9Ph0OSdYnfxb1jV+QPRi3VvX+SOuPIVFyp4GkGNSdfiPMa1jW7G+km27eybguI3c1y4iIfCC2kBQAQI1pcoqqbFTwwqMW2APF3hBlTwEGY3I61nHbY3+njbdvYVeOuHL5E1AERppP+aD01VGPpY8UrZLwPEbwtOwRSst4toJ1OnzoJ44tq2Knih6iVgbnHXIUZV8JBnr/is9FJthLpkr2EPHmzhsi6CI/3QegqqzP6ZVVk/B8RuQ13uxlOwnpScmKOo2KljjfGyJZ48QWlAZPXaulgTS2NfT/DHYfjkAgp6RQTwX5NfT70w+B4vMJkkk6RSsmHzYOTDW7LDFcUyLDKamWG3pi4Y3LsF7O4nvCfDGXn67Urqo8V+TskOLNBXnsAocVxEG6ywTlquGL2JjJQaSZ50d69s/SWJRCpHUVimJNamKYq6mKZG26EyLSwkVWlRJJ2K9+DApM8/F0jljtWwRYnelc5S7nNKPYUUYhi0maBYhFTyWwGwdlJYev0pvQq5fqBllUWWXE3hI6kf5/SvayOkedhVzHcMs5UzHc6k+XL6UWOPGN/OxPUS5SpeB1/HKtouCJI09TtWzyJQtCo4XLJxY7hRi1qdBOvluZ+tNjSiJ6neQohfzG5dzZTrA9dh9q7Dm9rbLZQ48cdWaCxiM+HzKIJQgDz+EfWitN2ebKHHNxb8km1aW3aiNFXX5DWhnJylYDk5zv5ZjLVoswVRJJgVdJpK2ezKSirZJ4ph3tuEYzCjKf7ddPeaRBxmrQGCcZxtIFg1JbQxlBeemQZv0FLyQSVhzaS351+4MvOp3qeWKg0js9JcTaJOMDKQjGcoBA/pz+Ij11odWBjqXuXn/oFaRmMKCT0Ak1jGNqKtk1Fu27LNoFdshH80rP+6XKm0v1F3CeRLytkKaweKKw0t7jXbeHCEAI5kHnrrFLai5/dEkeE8rku6GcN4VcvaqIA5naeg60OTJGHcLJmjDTJS9nr2aIET8U6R1pT6jHV2B/Uxo1Nvhqi13YJiInn6150szc+RHzfLkYfE2cjsvQke1eipclZ6UXasYKFhFhwWRcDATA18ppGWuNCeorjRL4tiS7BFUkz03pOOHFWwcUVFcmaTs5gjateIQzGT+grzuqyKc9dkIyS5SsscXeCIzHkCamjHlKgYq3RjeD3yWdiN9Z+c16WWNRSKM62qMm29ekfobEokKkdRimLRJCZBcOms07HHyIyPwTs0CmSdIRVsGFqX07DchQtMUGIlIWKLixLYoWlyiwWxGqXJpNgEjAW/FPQVX0EPdf2Juolqg2Otlsqgc5P2/zXoZE5NJE2OSim2O4i+VIH7A1rupycIX/NCsMeU9mft2yWEeted0k+c0kX5GlFnYzGuMyAlV2I69auyZW5OPgRjwx1J7Yy82W0oKwSZzeX7IpzdY1GgYrllbT7Gu4XbizbH9q+8TT6pUeLmleST+4uLfNZuEaeFx7SP0obrYWNVkivwU3ZvDzcLf0j6nQfSaZky3Gizq51Cvkj9onzX28go+k/rR9PqA3pVWNEBEXIxJ8QKhR1mcxPpH1pkm7VFFvkl4AzQSQYfCWc7qkxmIBPQczUs1WwZy4xbH4m0wY5s3kWBBI5HWpzoSTWjTdkcJCtcO7HKPQb/X7VNnl2RD1c7ko/BA7TBluZc8qZcL/SWOv1mux7VlHSU43W+xTzRssCWbZZgo3JAHzoQZSUU2y6x1q/cdbJAJUaRtG0npSYuCuRHjeOEXJeTXYLDi2ioOQA9TzNedklyk2RSlydkgUhnDhQM48+4kZu3D/e33r1IfQj1IfSiOK5hl72ceAwjciPPyqTqFdEnUfUarB4FVOaBmO5/QV5uTK5a8CG2yaKmZhQdscZlthBux19B+xVPRwuXL4KenjbshcFy90Ous07PfIDI3zZiiNa9RI/R2wgtU9YyeUxjWyKxwaF8kxutcrAdE2wNKqjpEktsc7a0rJPdHRWrHBqxSAkjs1MUxEkOD0amhLQ9HFa5xFtMJmWluWN6YtpkrDAcqpwKO+JLlvySBVKJpEPH2c+k1J1WB5lxToPFPhsi2cBBmfSkdJ0DxScmzcnUWqK3EcNuE7TJ1PrzpmPps1+4cuoxpdxMbhXNxE1ZfCoMaDNvrVs4SckvAnHlgoSn2e2a7EXMltm/pUx8hpTZvR40I8pJfJXJdIwcncqR7tFLl2RVxX9Rok8AwxS3JEFjPy5fvzoWB1M1KevBnuJGbtw/wB7feuhNpHoYtQX4AXSuVQBqMxY9ZiPkAPqadHLvYyN22R6JzsYX3ZnhavNx/hU+EciRrJ8hpUufI46Xcj6rM4+2JqL+Dtvq6hjEaiYHl0qDk12Io5JR7MJg7ARFQfygD/JoJy5OzpS5SbMd2iecQ/lA9gKdj+k9bplWNFbRFBY8Ew1x7g7uJXxSdumvvS5yUY7J+onFQqXk2vDsOygs8d4x8RG0DRQPKPua8/LNPUeyPNnJPS7EbtFjglsqD4m0HUDmazDDlK/gbghylfgFwLjDXMtsoSRoXnSORPnpXZ8CVyTOy4uG7L5jAJ8qhFI85utJJ6kn3r1eyPUQyhYRtuzVtTbQgbD/wC3OvN6ptSZ52S+TL0V57BEa6oEkgDrQ8W3Rq2YHj2NF+/ofCIVf1Nergx+nDZfCPp47LxbAVQF2qVybeyJO+5h41r3Utn6NJ6JKCnoQx2QUQljhaFbSFMRhFb2FMElS8WG2EokhMmJRUKZ1aKYtcwDp1pDjcjH2J/DjM+v6Vb0faX5IuoVNB8RiAgE89qfm6iGKuXnsTRxufYp8VfJO/n714XV5Z8lv7lkMaSHi6y25nfnO01VHLmxdLyvv9+1iJQjLJQHD4t8w1ZgJkU7/T+ozTl7m2gc2GHHwg3CMa9y/E+DxNEDQDQCfmK9LDnlOTXgm6rBDHivz2LLjePCLlEFjup10PMimzmkSdNhcnb7EzBxctLKgAgeHlof9ULd7FzuE3TJNq8CYB2E/Uj7qaWwHFpWzKZLTMBmcEs2YwDuTljqdqWvB6tzSekMxSqzLLhT8BUgwgQZRJ1mY5da5MODcU6X3/NkVcKTEMhJfIBPiJOzRyXzo0xnOu6fazYflGS1atIJGZO8MjQZgWPzNTuScnJnmqalOU396LYVOxBHwWIzlzHhDZV843PufpQyVJDZw40vJSX+B3Lt64SQBmkHeZ1AHyo1NRii2PUxhCKRL7OcJC5nuKC2YqJ1gKYJHqZ9qXmyOkkL6nNypR7FvgsClsuVEZmn0EbD5yfnU+SbkkmTym5VfgXieK7u0zc4gep2pUY8pUFihylRhrlwkySSep1NX9j0kq7Gg7JsQSMp8R0bloNql6pe0k6n6u5qWWQQeYivNuidOjz/ABtnJcZejEV6UZWkz0ou0mLw/Cm5cVBzOvpz+lDOfGLkZknxi2eiWLQUAKIArxZycnbICFx7G91ZYz4jovqaLDj5zG4ocpGBa+xEFmjpJj2r0+K7l6iu9EjhWF7y4By3PyoMkuMbF5p8Y/k0eItsAAKhUlZLBoxrLrX0NH6E2KHorFMILtFYmQgxQrlNMXJMFfxI2rZSXYVXkdaehQMg4o0hMmLlreApsaVrODAcjqFpg2ctBFeQWyw4d8PzNVdIv9u/yR9R9RAx97Pc01CiPnz/AH5VB1GT1c/t2lodihwhvuytuucxqDJ7pvQ9LQbG3QAoE+Y+361X1igoxhHwTY4tttjMGWCPcDAQIj9+tU9GnDDLInXj+fuLz8XOMGgGAxTWmzJExGuog0/BNxdozPijkjxkTeI3WYqGWGAk7altZqvI3aTJcMYpNxejS337qxpuqgD1gAfWjnpHnQXqZPyyHw7Klu86GQNAeuVZ+5NLf06H5LlOEZfzZR4YMWlTBUF56ZRP3igLpVVPzr9yLcaaEakX/Zvg85bz7Ayi9Y/mPlO3pWylSoj6rqKuEf1Acax5e9KyuTQHYkgzm+1JukO6fEo46fkk4bjl0IVOpOzHcfLnSZMGXSwcr/4Ljs7cJtmTMMfUTrr85oZbSJuqSU9FsKSyccooGcBxuMW0AWMSYn61kYOQyEHLsVN65Zv3CGuSoAyiYE8yOppiThHS2OSnjWkRrPB7TKzB9iY16VssjTSoY8800qLnAW+7tIBuI+p1+9TZXykxEncmy3FRMAyXFOFubjMNczGB61ZDIuKLIZlVMtezfC2tlncanQem5/SpupyqS4oXlycuxeXbgVSx2AJ9qiq3QpK2YLi+Iu3GzODH8o5AV6eOEYKkX4+KVIgNbI3BorGKSZb9n8OxJcbDSp88klRN1Er0WPEMQwip4RQqEbMldbevoG6P0N7IxalctmNHZ6NSYmSBtXKIuTATrR0TyZNwaMxCqCzE6KASSegA1NcLZa4jh1+0M12xdtjaXtugn1YCi2LZGL0akxTRKt8OxLLnXDX2SJDrauFY65gsRRqYpxI1i5mOVQSxMBQCSTtAA1JouaFOLJN7DMhyujIYmGUqYPOCNt/atcItC25JhEwN3uyyo+TXx5Wy9PiiN6D0moOMWC5W+TRH/wDG3ETO1twp2fKcp00hog7Go8fSvHFvz9g5ZLr4A4ThGIeGWxdYHUMLblTHQgQal6bDN5VevyHN+3sReKWXW4VdSrADQgqY6waLq5Slld+NC8ftiDvqotqMpDEyT5a/6q3jGOGMap92JTk8jd6A4OzmdVmJO/TnT+nhykkZmnxi2ExV4l2JbMQYn00H2p7bcmxONJQSRecS4mjG2F8YHjcDoBz+s0yT3oiw4XFSvTekPwKlsI8DU5z9p+xoH9J2RpdQv0KfCYJ7iubaXHYFRlRWcw2aSwUGBpHzoGeglJypILhuAYp3Vfy18SQCTauAAczOWsi1Yc1KMW6f7Fzxw3zeXDWbdzMqgtbVWDRGgIGuXKR5a0K72RdNg05TTv8AG/2KjGYTES127YuoCZJa3cVROwlhp0pMi6OPhFKnoEhpDNo0lm+1i0rrZcqyKWuFXVMx0HiIg7x7UciKXTzyNylaV6/BZ8KxRuWwxABkjTypU1RJlgoSpB7d12BNqzeueLLKWrjLIMHxhSoHnNYsUmMj02Rq0nX4Mx2juXO8yXCNNQAIjyM86ZBJLRT08UlaK+9hLigM9t1VvhZkZQ2k+EkQdOlEymmu6D4PB3iA4tXTbmSyo5WFPi8QEaQawGcW4tpGkcXbrWhatXSudZZUcrAO0gRUscbSb+zJMeGXFyo0L2HX4lZfUEfevPlGS7oS4Sj3TQtvAP8AF3bmdjlb6aVzjNrs/wBglim//F/szipBgiD0qeSrTBarTK7jOOW2FVj8R+gpmGDk2w4xbVorb2ItEiSDTVGSR3GSQ/E20MAxFBFyOTa7E7DWgqwBAqecm2D3A4q0p5V0Wwkee3Wkmvfk70fpCQOgoFnTRpiZDHamxZPMaoppMz1vsyLfDeFDGi2Hv3oyk9GY5FncKFGYgbn5R3YU9ugPCPxIZiyY62j2mVvgTWY+EqzEMp21rL+TGvgjfh3wfD4nG3rmQmzZ8Vu28Eguzd3n1IOUK3XWDyrl3BA8Q/FnE96Ws27XchvCrBszJOhZw3hJGug0nnGpoByZJ/Eazba1g+K4Ze7e41onQSWKG7bZo/mUpBPPToKxoGfbkiV+JNoYnDYTHWlnMArAamLgzKD6MGX1aul8A5NrkO7d3PymAw2BU+JgGuRzCeJve40/9TXOTXYDKuMFAXtLdI4JhDv4rX/53KL1HF2DkinhiixwvG3w3BrF+2FmQPECwg3HnQEUUZKTuRzlLHgXDuMwGMtcawl61eRRetQVdQfCzBu7dZ1GqkETqB56BkhjnpPR2Ocs0GpLaMDh+ymMxa57CC4q+H4kSDAaIYjkRTupg+StrR5/SqWSLlCP9h3B+z1iziHt8UL2QiqQFBfMTBgtbDRoR712OEkrSsY3BT45ZVX8+5p/xQ4HZ73BW7aJaVs6kqoWAWsqCY3gE71uJWmx/WNRlBfP/o0GKVMHesYPD8OV7FzIty5lknOxVixynNlC5mLHYigStXY6U1DJHGoafko+1PBbWGvd3aULbdc4UbLmLBlHlImOUxypsZco7PD/ANSxennteUmZ3sJxG5hw72MgLeFy6ls2ViVywwiAfcnpWONrY6XWZME2o1uu56bxXj921g7WIGTM2XNIOWCjMYE6fCOdJrbLs3V5Y9PDJGrlX42n9zCfhzxO5jOL3cTcCgtYYEKCAI7tVABJ5J1rWtDcORvL7u7X9qNtwXFcSfGX7eJsIMJN0W3IWWXvItjRjmBSZke2xXuymLm5NSWjyM8PS7jzYsa22xLJbjUC33pEjqoXX0FJVciKUbbjH9D2PGNYvm/wtQFy4ZIiIUNKrA5FItN/3FO76Lai16a+Dzr8OMM9zGflrnw2xce4hEmUZUKT/wAmE+h60vim9nnQ6aGTL7l2/wAF9xLt1iTi7ljCpaW3ZLJLqzFjbOVtmELOgA5CZ5A3KlYzqOteL6Uvgz3b/j2GxfdslplxCiLrQMhEGUzTLENsYGhNC2mZkyxyJSS2bjG9m/zuG4ejNltolt7hHxFe5UBV8yefIT5UVWkVyx+pGKKPtP2mAv8A5K0ht2LIyMIK5mUCBHK2Bt10O0SnM7i0iHrsjcfTjpL+fsafstfc4ANhwC2dsoO0d7DcxyzV0OSxe3uO6dZI9KuC93/si8ev4ghFvqqiSVy84EHmf6qg6qWWksiRD1k87SWVJfFf9l3fuX1s2e4XMcqzttlHUiq5yyrFH0lel/Y9Ccs0cUPSV6X9iD2qUZbTMALhBzR0gT8gdvU1L/qKVRb+om/1FKot/UeTdosVnvN0Xwj5b/WlYY8YisUaiVU0wdQ7vG6n3oTOKNbbxX8MTpAFRSh72efGPgocVx1gxAAI5U6OFUWx6ZNGfY616Nn3rEokKkIRRUJbBslEhMh1tKOxDR6p2R4hhsbgBw/E3O7uL/62JAzANmQoToWE5SvMD1g4ytUxM4tO0TMH2IwmDJvY7EJcQKcqFcikkRMZiXboBz66UQtuyh7GdpLGGxt1sht4a94QJLG2AZtsxJJOhad/i6CiUQLLHF/hZYuubtnGquGY5oCq+VTqVS5myx0JBjTesMcbK38ROO4d0sYHCENZw+WXBlZRDbRFb+aFLSdpI6GuXcDI9Ui+/C/HW7uGfC3oItXEuIGMCM4uLHWLiE/9hXXs7HTVMyXbvin5jHXGBlUPdp/xSZPmCxc/MVjVySJ8srbZf9rLq/8AhMIARIa1IkSP4dzlWzDl/wDCi04ZwtcXwaxY79LROuYgNEXHMZcw+9arSC4KeNRsBh7uD4PhrttMQL+Ju75YkEAhSUUnIiyTqZJJ16Fjhct9gMko4IOncmed8P4rftSti/dtqWmFdlBMASQDqYAHyoquVnnLJLHGk6LBsTdcFrjl2YfExLMQBGpO9XY7UUjzOolzk23s3X4mFWOH2bw3NiP/AI6n6fyel/q8twr4f+C9weGxltV77G2u5WCXKjOVH8udjA00zGTzpMnF9lsvxRzwX+5kXFefP79v1Md2x4uMRcuPZ8SqmS2R/MRJLRy1b2ApkYNRo8frM8c3UJrsqRS4a5k7q0RBKSQOWUKP1rZdySS5XP7mg/EHG5OD4dQwzM9tTB1ANu4Tp6CPnSPLPeUVLpsX2r+zKH8H0yYtXZ4D2rwykwDkNvUmYmSR71kvAfTyTzNV2Xf8mv4Vxj85/wCRwF69lYXb4s3JynujcZVAIiQpC+oYDXWlXdopjPnyg2Z/8LeFhMTev3yqfllZNSIFwyHIPOFVh/3oMfdi8Mfdb8Fpw78Q8G2JV/yItvcZUa//AA84Viqy7ASQAFnXZfKiUlYSzwu6AcYxacO4wMSNbN9D3mXXLmgXIA5hkRz1zGKLswZtY8vLwyyxPYu1iLr4vB4xVS6SzgKLq5mMuVIYRJkwdiT6VzimgcvSQzO09GW7e2uH2lt2MKFe8n/tvBiZABBD5TlZydSY0iNJoJV4AzLHFKMe5p+0naO7hcDgTh3WSLOcaGVS0rZD0B2POtlKkh+TI4QjxDcbGHxeHXHWcuYoO8WRmyrMhh/Uhn1HXSlZ05RtEvW4vVgskO6/n/BM7HJn4cqLd7pi7kMDqB3xbYEHUCPnXQXLFSdDcUXLp+KlT+f1GccwLIqs183dSADOkiSdWPQVB1OKUUm5X/PyQdXglCKcp8v5+WWmO4r3FvDNm08IcDWQUA28t/lVU8zhHG1+v4otnneKGNp61f4ozn4i3mtEXLZDC4ImZykch5EQR86R1WFPJzvTE9VhTyqd6Z5e7TWGpDZrDSTwxQbq5tpoJfS6FZ21DRoeJZQh9Kkhdk2L6kYy4asPVigLVXR9gxK1C5Dlo0xMgipRCJDxbrqFsfFcLYgUDYUSFs6aNNoTJHCJ1A9aasnyJlEPbQGjXGQmVoctj51kcdOwJSsao1pcV7rYMuxGviSax7kYtIDj7awBGvP9KoytJKKFwW22E4ejKjMAI2/fvRY7jByFZeLkoh8LQwFZS8tRoJnSrkebIkIBWMVVDLyjoKBs2KQazYlFHmG9YMj9KWw+VNmX4pxpkxRdIISUAO3923nNLPTw9MpYVF+dkK5xMXbivethokHKSpYHaTrtWNofHB6cWsb/AHJrYOx4Atw5jlzTBRZEkhgOR0pE6ugFPJtyjrx8hzwww5UqypuQdDpOlTyhqzVnjpNU2FAa3aZDbILxDRyGsfvrXU0uNAvhkyKSa0VxFciixAoFECWt/DPbw6+IZbkSsdRO/wAqyTV18E0XCeR67FaKwpFUULONNa7oWFAgmB786nyN8iFKTyWwuDWINSTYclZa/mz0FJdCljREe87uD01oopBOMYxKrtBiz8EedOxxXcd08F3KHNTCyjprGcXHZ7DBizHlEevOk5ZUtEnUydqIbtDou/Ol4u4XTdzME1QeikMNVo+uYlGkKY9FrqFMkIK1MVIIKYmJkKRRUJbGEV1UA2IK1C2LFYxbHgQKLshL7hkcgU2M3GNsTJJsIjgjUU2M01sROLXYH+VBMqa6OFXcWC8jSpkXGWjm19BQZVLls6DVaOZAEABMncUUqUEkLtuTsXDHxAROu1Fi+pAZfpZY28UCTGnlVSlZDPG0ibavdPX2rWJcSPiMWI3oGMjBheKcT7myrCMzAAA/8ZJ+WnvSp96CwYfUm0+yMHdeTJoD24qg2BC51z/DmGb/AIzr9KF1ezMl8Xx7lksZiVELJgdBOg18qkmL3WySppOzC1ucSuoUDKJVf5tcwbn5bU1ya0yWODHNNp6YA462UYPbGZiTmEaSfpFdfYP0pKScXr4D/lMNcdFtsRIM7+UDXnXfLA9TLCLckSMZwi63h7wMqDwzofpQck9g480I7ruVL4C4FzlTl61z70UrLBurG2LXjUOCASJnTSsOnL2txL/iYSVCx8ulSyb8k+G92EwzVLMNoO92l0YkdgrxGYxp19KNR0BlW0jN8dxud9NhpVEI0i3Bj4xKvvKOh9Ci5QtHUangWEK288/FrH2qXNJXxPNzT5T/ABoq+O3WzQaLGlRb00VVlQaYWIa29WUfWM5aJCpB7YohLDAV1C2LWoVI6jTEyQ4UxMTJCZK3j8CmxIoGvALHGifwKHvtRT7UK8nNtWvUaF+TrBiTR4dWxWTeh1vEmYImaOGaTdMVPGltBcQiMYnKw9tdabNQm6bpiIuUVdWgC4W4mZwRoCQd5rYY5QuR0skJ1FlKcSRzoYuin00yVZx7d2z5ogqoH9WaSflAo+WhMsK5qNfciXseTWNjY4UgeMxedLYliVDBpJIHi8KqDsAANuvlQMZjx8WyEaweWPCmCliVzSjKNAQGYQCZ+dKk6TE5U3ST8k6ylSSYLZJsWmZgqiSTp99ayC3oCUlGLbH46+zuS8TsQNhGmla+5mOKjFJEauGEzhGENy5AOWBmnpERW9lYnPNRiLfxdxXcd4dyCRsY02oDYwg4rQe3xm4FCkAgR6kCsdXYD6eO2i2wuOtX2AK/CJ1jfalNOKbQieOWNB/ytp7hiNBqBSW3WzlOcYhEwOpg6UmSRvqgLuGfWKDiMWSIXD3QtqCDpM6UTjsW1c9GKx1yXY9SaoietBUkiCzUdB0OtEkgDcmB86xoGTUVbNxhg9u0A24FQzqUtHlKpS0ZfH4gu5J9KbFUj1cUOMaI0VzHIad6uR9WxVFbQpki2K1C5BxRoTI4iioU2JFcKZ0VqFscDTFKhMkEEGjVMTK0cbetdw3Yty0Iw1rJbdAeBLtdMUhRou9MWoC3uQywBm1MVmJLlsDI3WgN46mue3Zi7HfmclvRjmJiOWX0qiMuMddxTx8p7WiNcx1u4f4tuJIl00IAERFMUk/qRqwzh9D/AEYN8ArqgskM38Rmkw2UEZQQdAY+5rHFeAlmlFt5NLSX+StNppAymWjKIOs7R1mhaZSpR277DsbezOTly7DL0yqFj6ULOxx4xq7BW1k0DDbNBgbbC1liA7Bs3XLIj0k1Nlk0qJZNOd/H+SYlio3IzkHwllwS6EAoCdfaPvTMd02LySi6jLyV7g86JD0MiuOLPhmGbu3uhyuUEesCTWvS/JPlmnNQasriaApOrGcXvBMKhtszRMn5ACgm2qokzTlzpAcOYOhNSyY5r5LCzimXY0psW8aYS1xSNGHPetSsGWHyifiMZbCGSBpQKErFRi29FcmFsshbKDPOmOUk6D5zT7laezdsgmT5RRetWqHf1cyLgOz7i4GBEKZE+VbPNFLYWXqVODiaHHuwU+GT5VHFJsnxpXsxl62wY5gQapPYg01oQCgbGoEd69BH1TCWxRCmSFFbQtj61CZDhRpiZCxR1YpiRWULYorRTFUUURUgltqZCTEzQ8KDRpKWxMm0CuoZoJRdmJqhL2wEUU/CFL5OtaKxjyo4ai2LntpER6BIIZxNjCoRGUe88/pVMr0n4F4ktyXkqSpJgbnQeprUii0lbCcQuEvBXKVATLMxkGXf1B9657dgYopR07vf7hsDjL0kgqxS2SC4zZVQyMs7GYj5VgOTHjpJ6t+PuR7ndNmIm3CiFMvmfn4uU0I1c1Se/wDjQRMEynYN4Q0qcwCnmSNqXNMz1YtfHjZfhWEI0eEQAOU+L31qPNd7J00/cvJKQVI0YGe2RbzBoDGI6xTUmod+4CknOq7FbdWtiPTAEUQRZYjDNbsKc58cSvLUTWyfgRCankeuxWxQFB1CaaC7g0SwIOsCddyaXkluiKE3KeyNZFTSKWGY0owThwU3fFsAT86YlptA5m1DRE7X3VGWDrTMSb7h9InszScRdRCuQOk0/gWvFFu2ifg+0lxVynxefOgliTdiJdHFu0abs1xtbkhtGAqPqMLq0RZsLxy+xcXcShBgialUGhdMgph0YyQCaJya0M5SWkBxPDEc7RWLI0PhnlFGPO9e0fesLbFcAyQtGhMh1bQpnVoqQoNGmJkOFMWxMjiKxqhbZw2rfAuQ9dqJaQqXcVK2OlYqQtu51pkJ+GJnEW7aDbH5UUoctoVyruDurCgT6iukqikYncrI6W5YCY13rsauVGTlSsjY0EsdZ1ifIaCmN2zoaSBYXDkvIOXKC07xlE7fKji/J2SaUaau9fuRXQkkncmT6nehGp1octiEZs0GQuUcwQSZ8tFrmZy9yVfcjG3QNjbJvCkc3AiMVzyCZMZYkz1ETWCszio8mrot8NxFXYG6JgRK6Enkx6mkTSb2hEsTiqg/3J1pAVXKwLMYy8xv/ipnh+AHOm7Wl5H462UhZJ0BI5AnlWSjWkdikpWyvuGuSHoZat5mC9SB70SVnSlxTZM4vaKMEzlgAInlQt2Lwu1dECKEeGwdnO6qdidfTnWAZJcYtltxWyEKqpMRtM0iTsTgdptgrVTyGsW61AaiRwfDqwZzvMDyFNbaSoRnk+XExnaa7F5gDMVXiVo9Hpl7EUouU1oooPaNLZxvuy9hBYB/mMk/pUHUN8q8HjZ5OWV/sV/HHi4MrGY5Gsh2LuninHaGYHH3EMgz5GlzSY6eCMixtcXM6ikOKFvpVWmZ4b17SPtGHQVothRWoXIUGjQiR0UdCmzq4UxwokKkPU0aYmSHFa1x+BdnGufYWKdqLwKfcW0KLH8ipjRvpWRu9AS7B7lwHRhT3JXTRPxa2mNXDjUgZhB05/OiUUra2BKb7diA1ugQdiLaXK076ZffU+33o9UC5Pkq7EdrVCMUjr1pcqxvBzHzkwPaPesbOi3bsjNboRqYtiypDlmjKsqNJZiwEeYiTReDJSdpJC2TS5IJlngBmdRMSRrMR86UlsTkdRbJ1zGle8QHMpJEtqekzS7FLGnUvIUJYusoX+HoZnrpArHQN5IJt7H4ThJLnxeFT8Q3JHT98qHS2dPP7arZX4sHMZJOpgnnFCx8KrQGhGFhwXCB3JJgKJ6a0LdKxGebiqXk7FA94RMwYpMg8f0oIppDNA4m5Arkg4on/ksliQ0ErmPrE03l7qJPU5TtnmeMulmJJkzvV0Ue1FUtArYrpBE/C28zADmQPc0lgZJcYuXwej2MALVvKp5fWvNnk5StnipuUrZlL5JdpM60x9j2YJKKD2kqabDDhKU2EVyjWvbPqQ6VqFyH0dCmKK1CpDhRoRIdFFQpnAVwtigVqFseppiexMkPKzRuNiW6GvQyAHDajWoipdzrQ1rYLYufYRjrXPuLHqSFkHc/OmK1ETKnIUurfFof6h09KK1LuLacewy9aIUCNNTPXYa9P91rTpAqS5NkY2elAM5CYlZJMRsI6QAP0oZOwoaVEV7VCNUhr20yDTx5jO+iwIHTefajs1OXL7A7dugkG2WfDraeLPsFMDaW5RSnVCcjlrj8gwKUwxwFCcWvD1YWXbOREwNI2rnpInyU8iVD/wDyCXMq3FgDc/vlQfJnpShbixzcLt3GPdsAAPXWgbpWzlmlFe5D8FwxlVmzEHUabQOdDKSWjp5eUlorrYO5pMioKaUzkRGQu4QfzGP80yC8hSlwi5B+07XLVmA0jYmm4uMpWJ6WMZT2efMNaqPWC20oGzi44DgTduhRpHiJ8hSZzUVbJuryccdfOjZcUdrdvTkKgVSZDgipSpmasLJmumz1iwtJUkmaGyUuzSoUV9AfVMMorhbHijQmQ6KIUxRWoVIcKNCZDooqFMQVyFyFWiiKkKp1oo9xUuwSQabqQl2hLoiBXSXgWtiWzoTFbHSYE+4yaxAMJcjSOmvrTGl4Eq/IwCuSBYd2YEidhl+VFbEUmr/UfbgmQIIAIHIxvXd+xjtKn2BXbMEg70qSoZGVq0DNmgDUhuItAxAiFA9TzNa5GwbQDuqFjUySmQWiI8ZbfooHWgl2A93P7AQKWxg4ChOLDFYUJaQyZbcctprJd6EY58psr6BlA+1dZTKkg+VD30c0n3NC1xrVoSc3+6XOmyOK5yCZbboIA15xtSpXZy5RZHxvDIHhMnoaX3Y2Gb5K3D8Oui8DoIEzv5U1NKIeXNFwpFP2wxjki222/rTsMV3RR0cFXIy4WnNlwa2tLbONL2RtOHLiIiDU+auNM8/rZJtR8osePYwxk61NGNbN6XH/AORAwluk5GXljbSo5M0JloLNP//Z"/>
          <ProjectCard title="Notes CLI App" github="https://github.com/shreyasjain/notes-app-cli" link="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking-1400x1050.png"/>

      </div>
      {/* </Container> */}
      </div>
    }
  }

//   class Button extends React.Component {
//     render() {
//       return (
//         <button className="button button-primary">
//           <i className="fa fa-chevron-right"></i> Find out more
//         </button>
//       )
//     }
//   }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          {/* <h4 className="card-header--title">{category}</h4> */}
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          {/* <p className="date">March 20 2015</p> */}
          
          <h2 className="project-card-title">{this.props.title}</h2>
          
          {/* <p className="body-content">{this.props.text}</p> */}
          
          {/* <Button /> */}
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
export default Main
