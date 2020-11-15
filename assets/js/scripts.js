function initEventBindings() {
    const postList = document.querySelector( '.e-state-explorer__post-list' );

    if( postList ) {
        postList.addEventListener( 'click', ( ev ) => {
            const target = ev.target;
            if( target.classList.contains( 'e-state-explorer-post__bookmark' ) ) {
                if( target.innerText === 'bookmark_border' ) {
                    target.innerText = 'bookmark';
                } else {
                    target.innerText = 'bookmark_border';
                }
            }
        } );
    }

    const navHandle = document.querySelector( '.e-state-side-nav__handle-icon' );

    if( navHandle ) {
        navHandle.addEventListener( 'click', ( ev ) => {
            const sideNav = ev.target.closest( '.e-state-side-nav' );
            if( sideNav ) {
                if( sideNav.classList.contains( 'e-state-side-nav--open' ) ) {
                    sideNav.classList.remove( 'e-state-side-nav--open' );
                } else {
                    sideNav.classList.add( 'e-state-side-nav--open' );
                }  
            }
        } );
    }
}

function renderPostList( posts = [] ) {
    const postListTarget = document.querySelector( '.e-state-explorer__post-list' );
    const docFrag = document.createDocumentFragment();
    let postListMarkupString = '';

    if( postListTarget ) {
        for( let i = 0; i < posts.length; i++) {
            const defaultPost = {
                    mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    location: 'Koreatown',
                    completionPercent: '50%',
                    completionTime: '1h',
                    fullAddress: '717 S Berendo St, Los Angeles, CA',
                    management: 'TGA Management',
                    reviewCount: 12,
                    size: '850 sqft',
                    price: '$1,595',
                    views: 89,
                    commentCount: 2,
                    coinCount: 304
                },
                post = Object.assign( {}, defaultPost, posts[ i ] );
            const postMarkup = document.createElement( 'div' );
            postMarkup.classList.add( 'e-state-explorer-post' );
            postMarkup.innerHTML = `<div class="e-state-explorer-post__img" style="background-image: url(${post.mainImg})"></div>
                <div class="e-state-explorer-post__content">
                    <div class="e-state-explorer-post__header">
                        <span class="e-state-explorer-post__location">${post.location}</span>
                        <span class="e-state-explorer-post__spacer">·</span>
                        <span class="e-state-explorer-post__completion">${post.completionPercent} completed ${post.completionTime} ago</span>
                    </div>
                    <div class="e-state-explorer-post__text-row e-state-explorer-post__text-row--one">
                        ${post.fullAddress}
                    </div>
                    <div class="e-state-explorer-post__text-row e-state-explorer-post__text-row--two">
                        <span class="e-state-explorer-post__management">${post.management}</span>
                        <span class="e-state-explorer-post__spacer">·</span>
                        <span class="e-state-explorer-post__review-count">${post.reviewCount} Review${ (post.reviewCount > 1 ) ? 's' : '' }</span>
                    </div>
                    <div class="e-state-explorer-post__text-row e-state-explorer-post__text-row--three">
                        <span class="e-state-explorer-post__size">${post.size}</span>
                        <span class="e-state-explorer-post__spacer">·</span>
                        <span class="e-state-explorer-post__cost">${post.price}</span>
                    </div>
                    <div class="e-state-explorer-post__icons">
                        <div class="e-state-explorer-post__icon e-state-explorer-post__views">
                            <i class="material-icons">visibility</i>
                            <span class="e-state-explorer-post__view-count">${post.views}</span>
                        </div>
                        <div class="e-state-explorer-post__icon e-state-explorer-post__comment">
                            <i class="material-icons">chat_bubble</i>
                            <span class="e-state-explorer-post__comment-count">${post.commentCount}</span>
                        </div>
                        <div class="e-state-explorer-post__icon e-state-explorer-post__coin">
                            <i class="material-icons">monetization_on</i>
                            <span class="e-state-explorer-post__coin-count">${post.coinCount}</span>
                        </div>
                    </div>
                    <i class="material-icons e-state-explorer-post__bookmark">bookmark_border</i>
                </div>`;

           // postListMarkupString += postMarkup;
            docFrag.append( postMarkup );
        }

        //template.innerHTML = postListMarkupString;

       // const postListDocFrag = template.content.cloneNode( true );

        postListTarget.append( docFrag );
    }
}

function init() {
    const postList = [ {
                mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                location: 'Koreatown',
                completionPercent: '50%',
                completionTime: '1h',
                fullAddress: '717 S Berendo St, Los Angeles, CA',
                management: 'TGA Management',
                reviewCount: 12,
                size: '850 sqft',
                price: '$1,595',
                views: 89,
                commentCount: 2,
                coinCount: 304
            },
            {
                mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                location: 'Koreatown',
                completionPercent: '50%',
                completionTime: '1h',
                fullAddress: '717 S Berendo St, Los Angeles, CA',
                management: 'TGA Management',
                reviewCount: 12,
                size: '850 sqft',
                price: '$1,595',
                views: 89,
                commentCount: 2,
                coinCount: 304
            },
            {
                mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                location: 'Koreatown',
                completionPercent: '50%',
                completionTime: '1h',
                fullAddress: '717 S Berendo St, Los Angeles, CA',
                management: 'TGA Management',
                reviewCount: 12,
                size: '850 sqft',
                price: '$1,595',
                views: 89,
                commentCount: 2,
                coinCount: 304
            },
            {
                mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                location: 'Koreatown',
                completionPercent: '50%',
                completionTime: '1h',
                fullAddress: '717 S Berendo St, Los Angeles, CA',
                management: 'TGA Management',
                reviewCount: 12,
                size: '850 sqft',
                price: '$1,595',
                views: 89,
                commentCount: 2,
                coinCount: 304
            },
            {
                mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                location: 'Koreatown',
                completionPercent: '50%',
                completionTime: '1h',
                fullAddress: '717 S Berendo St, Los Angeles, CA',
                management: 'TGA Management',
                reviewCount: 12,
                size: '850 sqft',
                price: '$1,595',
                views: 89,
                commentCount: 2,
                coinCount: 304
            },
            {
                mainImg: 'https://images.pexels.com/photos/1694429/pexels-photo-1694429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                location: 'Koreatown',
                completionPercent: '50%',
                completionTime: '1h',
                fullAddress: '717 S Berendo St, Los Angeles, CA',
                management: 'TGA Management',
                reviewCount: 12,
                size: '850 sqft',
                price: '$1,595',
                views: 89,
                commentCount: 2,
                coinCount: 304
            } ];
    initEventBindings();
    renderPostList( postList );
}

init();