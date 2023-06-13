- `useNavigate` hook is used to programatically navigate to different routes within the application. used to obtain the `navigate` function. When the button is clicked, the `handleClick` function is called, which in turn calls the `navigate` function with the desired route `("/")`.  
- `useLocation` hook, on the other hand, provides access to the current `location` object in the routing system. It returns an object containing properties such as pathname, search, hash, and state that represent the current URL location.

- `import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";`
SVG files can be imported as svg files and be used as React components. This allows
to treat SVG files as reusable components and manipulate them using React's component based approach.  

- Created a footer
    - a navbar 
        - populated it with items, such as 
            + Explore
            + Offer
            + Profile

- `pathMatchRoute` in we are checking if the url that we are currently is the url that we want to be in. if both are same then we return true else false. The function has been used in the Icons components and text, where the color of the icon and text is changed according to the url. We are doing this just to make the icons in the navbar darker when we are in the page of navbar and other's lighter. 