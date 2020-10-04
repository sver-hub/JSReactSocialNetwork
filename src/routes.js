import React, {useContext} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsSearchResultsContainer} from "./components/Friends/FindFriends/FriendsSearchResults/FriendsSearchResultsContainer";
import {Auth} from "./components/Auth/Auth";


export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={'/profile/'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/findFriends'} render={() => <FriendsSearchResultsContainer />} />
                <Redirect from={'/'} to={'/profile'} />
            </Switch>
        )
    }
    else {
        return (
            <Switch>
                <Route path={'/auth'} render={() => <Auth/>}/>
                <Redirect to={'/auth'}/>
            </Switch>
        )
    }
}