export const userSettings = `
    <div class="{{ userClassName }}">
        <div class="{{ avatarClassName }}"></div>
        <div class="{{ contentClassName }}">
            <span class="{{ contentTitleClassName }}">{{ contentTitleText }}</span>
            <span class="{{ contentMessageClassName }}">{{ contentMessageText }}</span>
        </div>
        <div class="{{ userClassSettings }}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2499 12.5701V11.4226L21.6899 10.1626C21.9554 9.9286 22.1296 9.60833 22.1817 9.25836C22.2339 8.90839 22.1606 8.55125 21.9749 8.25006L20.2049 5.25006C20.0734 5.02226 19.8843 4.83305 19.6566 4.70141C19.4288 4.56977 19.1705 4.50033 18.9074 4.50006C18.7444 4.49881 18.5823 4.52414 18.4274 4.57506L16.6049 5.19006C16.2903 4.98097 15.9621 4.79305 15.6224 4.62756L15.2399 2.73756C15.1714 2.39226 14.9835 2.08209 14.7093 1.86134C14.4351 1.64058 14.0919 1.52332 13.7399 1.53006H10.2299C9.87797 1.52332 9.53483 1.64058 9.2606 1.86134C8.98638 2.08209 8.79853 2.39226 8.72995 2.73756L8.34745 4.62756C8.0054 4.79301 7.67467 4.98092 7.35745 5.19006L5.57245 4.54506C5.41592 4.50428 5.25383 4.48908 5.09245 4.50006C4.8294 4.50033 4.57105 4.56977 4.34332 4.70141C4.11558 4.83305 3.92647 5.02226 3.79495 5.25006L2.02495 8.25006C1.84989 8.5508 1.78483 8.90305 1.84093 9.24648C1.89703 9.58991 2.07079 9.90316 2.33245 10.1326L3.74995 11.4301V12.5776L2.33245 13.8376C2.0634 14.0686 1.88489 14.3874 1.82859 14.7375C1.7723 15.0876 1.84187 15.4464 2.02495 15.7501L3.79495 18.7501C3.92647 18.9779 4.11558 19.1671 4.34332 19.2987C4.57105 19.4304 4.8294 19.4998 5.09245 19.5001C5.25546 19.5013 5.41758 19.476 5.57245 19.4251L7.39495 18.8101C7.7096 19.0192 8.03783 19.2071 8.37745 19.3726L8.75995 21.2626C8.82853 21.6079 9.01638 21.918 9.2906 22.1388C9.56483 22.3595 9.90797 22.4768 10.2599 22.4701H13.7999C14.1519 22.4768 14.4951 22.3595 14.7693 22.1388C15.0435 21.918 15.2314 21.6079 15.2999 21.2626L15.6824 19.3726C16.0245 19.2071 16.3552 19.0192 16.6724 18.8101L18.4874 19.4251C18.6423 19.476 18.8044 19.5013 18.9674 19.5001C19.2305 19.4998 19.4888 19.4304 19.7166 19.2987C19.9443 19.1671 20.1334 18.9779 20.2649 18.7501L21.9749 15.7501C22.15 15.4493 22.2151 15.0971 22.159 14.7536C22.1029 14.4102 21.9291 14.097 21.6674 13.8676L20.2499 12.5701ZM18.9074 18.0001L16.3349 17.1301C15.7327 17.6401 15.0445 18.0389 14.3024 18.3076L13.7699 21.0001H10.2299L9.69745 18.3376C8.96126 18.0612 8.27673 17.6632 7.67245 17.1601L5.09245 18.0001L3.32245 15.0001L5.36245 13.2001C5.22377 12.4237 5.22377 11.6289 5.36245 10.8526L3.32245 9.00006L5.09245 6.00006L7.66495 6.87006C8.26715 6.35998 8.9554 5.96125 9.69745 5.69256L10.2299 3.00006H13.7699L14.3024 5.66256C15.0386 5.93888 15.7232 6.33692 16.3274 6.84006L18.9074 6.00006L20.6774 9.00006L18.6374 10.8001C18.7761 11.5764 18.7761 12.3712 18.6374 13.1476L20.6774 15.0001L18.9074 18.0001Z" fill="#3F51B5"/>
                <path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.506 12.5926 16.3937 13.1805 16.1697 13.7292C15.9457 14.2779 15.6145 14.7763 15.1954 15.1954C14.7763 15.6145 14.2779 15.9457 13.7292 16.1697C13.1805 16.3937 12.5926 16.506 12 16.5ZM12 9C11.6035 8.99077 11.2093 9.06205 10.8411 9.20954C10.473 9.35704 10.1386 9.57768 9.85812 9.85812C9.57768 10.1386 9.35704 10.473 9.20954 10.8411C9.06205 11.2093 8.99077 11.6035 9 12C8.99077 12.3965 9.06205 12.7907 9.20954 13.1589C9.35704 13.527 9.57768 13.8615 9.85812 14.1419C10.1386 14.4223 10.473 14.643 10.8411 14.7905C11.2093 14.938 11.6035 15.0092 12 15C12.3965 15.0092 12.7907 14.938 13.1589 14.7905C13.527 14.643 13.8615 14.4223 14.1419 14.1419C14.4223 13.8615 14.643 13.527 14.7905 13.1589C14.938 12.7907 15.0092 12.3965 15 12C15.0092 11.6035 14.938 11.2093 14.7905 10.8411C14.643 10.473 14.4223 10.1386 14.1419 9.85812C13.8615 9.57768 13.527 9.35704 13.1589 9.20954C12.7907 9.06205 12.3965 8.99077 12 9Z" fill="#3F51B5"/>
            </svg>
        </div>
    </div>
`;

export const user = `
    <div class="{{ userClassName }}" onclick="{{ clickHandler }}">
        <div class="{{ avatarClassName }}"></div>
        <div class="{{ contentClassName }}">
            <span class="{{ contentTitleClassName }}">{{ contentTitleText }}</span>
            <span class="{{ contentMessageClassName }}">{{ contentMessageText }}</span>
        </div>
        <div class="{{ infoClassName }}">
            <span class="{{ infoTimeClassName }}">{{ infoTimeText }}</span>
            <span class="{{ infoNewMessageClassName }}">{{ infoNewMessageText }}</span>
        </div>
    </div>
`;
