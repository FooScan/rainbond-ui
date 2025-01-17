/* eslint-disable react/react-in-jsx-scope */
import { formatMessage } from 'umi-plugin-locale';
import roleUtil from '../utils/role';
import { isUrl } from '../utils/utils';

const publishIcon = (
  <i className="anticon">
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="应用视图-发布列表"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="发布"
          transform="translate(-21.000000, -170.000000)"
          fill="#979797"
          fillRule="nonzero"
          stroke="#979797"
        >
          <g id="编组-4备份" transform="translate(20.000000, 89.000000)">
            <g id="编组" transform="translate(2.000000, 81.922078)">
              <path
                d="M9.97402295,4.45528513 C9.91437417,4.3898264 9.81893611,4.3898264 9.75928731,4.45528513 C9.6996385,4.52074386 9.69963852,4.62547783 9.75928731,4.69093659 L11.8112056,6.94271705 L6.4428147,6.94271705 C6.3593064,6.94271705 6.28772786,7.02126753 6.28772786,7.11290978 C6.28772786,7.20455202 6.3593064,7.28310248 6.4428147,7.28310248 L11.8112056,7.28310248 L9.74735755,9.53488296 C9.72349804,9.56106646 9.69963852,9.61343344 9.69963852,9.65270868 C9.69963852,9.69198392 9.71156828,9.7443509 9.74735755,9.7705344 C9.78314682,9.79671789 9.81893609,9.82290141 9.85472538,9.82290141 C9.89051468,9.82290141 9.93823368,9.80980966 9.9620932,9.7705344 L12.2764662,7.23073549 C12.3361149,7.16527676 12.3361149,7.06054279 12.2764662,6.99508406 L9.97402295,4.45528513 Z"
                id="路径"
              />
              <path
                d="M19.9473003,12.1925076 C19.8995813,12.1401406 18.8497626,11.0142504 16.9290716,10.673865 C16.2967945,10.5560392 15.628728,10.5429475 14.9487319,10.6345897 C15.4975007,9.56106646 15.7957446,8.35662574 15.7957447,7.12600152 C15.7957447,3.19847742 12.8848838,0.00409116274 9.30595652,0.00409116274 C5.72702924,0.00409116274 2.81616841,3.18538568 2.81616841,7.11290978 C2.81616841,8.10788253 3.00704454,9.07667182 3.36493725,9.98000236 L0.155832447,9.98000236 C0.0723241494,9.98000236 0.000745608358,10.0585528 0.000745608358,10.1501951 L0.000745608358,19.8249961 C0.000745608358,19.9166383 0.0723241494,19.9951888 0.155832447,19.9951888 L9.30595652,19.9951888 C9.34174579,19.9951888 9.36560531,19.982097 9.38946482,19.9690053 L19.9234408,12.4543425 C19.9592301,12.428159 19.9830896,12.3757921 19.9950193,12.3234251 C19.9950193,12.2710581 19.9830896,12.2186911 19.9473003,12.1925076 Z M14.5550499,10.673865 C12.2406769,11.0928009 10.1529693,12.6245353 8.79297696,13.8420677 L3.73475973,10.0454611 C3.32914798,9.12903881 3.12634211,8.14715777 3.12634211,7.12600152 C3.12634211,3.3817619 5.89404586,0.344476588 9.30595652,0.344476588 C12.7178672,0.344476588 15.485571,3.38176187 15.485571,7.12600152 C15.485571,8.36971748 15.1634675,9.6003417 14.5550499,10.673865 Z M0.310919309,10.3203878 L3.56774314,10.3203878 L8.57824131,14.0908109 L6.43088494,16.6175181 L3.376867,14.2610036 C3.34107773,14.2348201 3.30528846,14.2217284 3.25756943,14.2348201 C3.22178016,14.2479119 3.18599089,14.2610036 3.16213138,14.3002789 C3.11441235,14.3788293 3.12634211,14.4835633 3.19792065,14.5359303 L6.34737664,16.984087 C6.40702543,17.036454 6.50246348,17.0233622 6.55018253,16.9579035 L8.91227452,14.1824531 C10.8448952,12.4150673 13.8034751,10.4382135 16.8694228,10.9880669 C18.3009938,11.2499018 19.2553744,11.9830396 19.5894076,12.2841498 L9.27016725,19.6548034 L0.322849066,19.6548034 L0.322849066,10.3203878 L0.310919309,10.3203878 Z"
                id="形状"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </i>
);
const backupIcon = (
  <i className="anticon">
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="应用视图-发布列表"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="发布"
          transform="translate(-22.000000, -248.000000)"
          fill="#384551"
          fillRule="nonzero"
          stroke="#979797"
        >
          <g id="编组-4备份" transform="translate(20.000000, 89.000000)">
            <g id="编组" transform="translate(3.000000, 159.922078)">
              <polygon
                id="路径"
                points="11.3513514 5.88235294 10.6306306 5.88235294 10.6306306 11.1080975 7.02702703 11.1080975 7.02702703 11.7647059 11.3513514 11.7647059"
              />
              <path
                d="M9.52322469,0 C5.72676476,0 2.40843955,1.93228188 0.570902221,4.81901566 L0.557261319,0.000984340045 L0,0 L0.0163597073,5.80143177 C0.0116017982,5.81217002 0.00478134712,5.82259508 0,5.83333333 L0.0163597073,5.83333333 L0.0177425479,6.13020134 L6.44024019,6.14680089 L6.43885735,5.61489933 L0.910588809,5.60058166 C2.56052857,2.66861298 5.79907092,0.666666667 9.52322469,0.666666667 C14.9150842,0.666666667 19.3015483,4.8535123 19.3015483,10 C19.3015483,15.1464877 14.9150842,19.3333333 9.52322469,19.3333333 C5.70016266,19.3333333 2.38387655,17.2265548 0.777554857,14.1666667 L0,14.1666667 C1.65608051,17.6080761 5.29634977,20 9.52322469,20 C15.309311,20 20,15.5221253 20,10 C20,4.47720358 15.309311,0 9.52322469,0 Z"
                id="路径"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </i>
);

const upgradeIcon = (
  <i className="anticon">
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="应用视图-发布列表"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="发布"
          transform="translate(-21.000000, -407.000000)"
          fill="#979797"
          fillRule="nonzero"
          stroke="#979797"
        >
          <g id="编组-4备份" transform="translate(20.000000, 89.000000)">
            <g id="编组" transform="translate(2.000000, 318.922078)">
              <path
                d="M13.095,12.3053422 C12.9286229,12.3050607 12.7691004,12.2312553 12.65125,12.1000349 L9.99,9.10003492 L7.30625,12.0734986 C7.06082846,12.3450129 6.66488029,12.3428243 6.421875,12.0686103 C6.17886971,11.7943963 6.18082846,11.3519961 6.42625,11.0804818 L9.55375,7.61679469 C9.67128937,7.48608938 9.8305736,7.41306082 9.9964037,7.41384076 C10.1622338,7.41463326 10.3209576,7.48916952 10.4375,7.62098464 L13.53875,11.115398 C13.7811616,11.3900405 13.779486,11.8318875 13.535,12.1042249 C13.4176174,12.2331472 13.2595979,12.3053422 13.095,12.3053422 L13.095,12.3053422 Z"
                id="路径"
              />
              <path
                d="M9.98,19.9296439 C9.63482203,19.9296439 9.355,19.6169935 9.355,19.2313198 L9.355,9.30534218 C9.355,8.91966847 9.63482203,8.60701816 9.98,8.60701816 C10.325178,8.60701816 10.605,8.91966847 10.605,9.30534218 L10.605,19.2313198 C10.605,19.6169935 10.325178,19.9296439 9.98,19.9296439 L9.98,19.9296439 Z"
                id="路径"
              />
              <path
                d="M15.77875,15.3737779 L13.515,15.3737779 C13.169822,15.3737779 12.89,15.0611276 12.89,14.6754539 C12.89,14.2897802 13.169822,13.9771299 13.515,13.9771299 L15.77875,13.9771299 C17.418465,13.9763609 18.7479315,12.4921733 18.75,10.6600908 C18.7486226,8.82700962 17.4193569,7.34117169 15.77875,7.33886173 L14.0875,7.33886173 L14.18125,6.36958799 C14.1925,6.27740922 14.20625,6.18523045 14.20625,6.08886173 C14.2034964,3.50821116 12.3321813,1.41673167 10.0225,1.41288408 C7.71233049,1.41596243 5.84025512,3.50766675 5.8375,6.08886173 C5.8375,6.18523045 5.85125,6.27740922 5.8625,6.36958799 L5.95625,7.33886173 L4.22,7.33886173 C2.57988131,7.34194098 1.25137594,8.82755399 1.25,10.6600908 C1.25206741,12.4916284 2.58077307,13.9755909 4.22,13.9771299 L6.48375,13.9771299 C6.82892797,13.9771299 7.10875,14.2897802 7.10875,14.6754539 C7.10875,15.0611276 6.82892797,15.3737779 6.48375,15.3737779 L4.22,15.3737779 C1.89070276,15.3714691 0.00275646507,13.2626567 -2.84217094e-14,10.6600908 C0.0013773485,8.05620731 1.88952552,5.94529475 4.22,5.94221369 L4.58875,5.94221369 C4.66326437,2.64847942 7.07241868,0.020482261 10.02125,0.0162360335 C12.9703504,0.0197452723 15.3798886,2.64816122 15.45375,5.94221369 L15.7775,5.94221369 C18.1086654,5.9445238 19.9979324,8.05543669 20,10.6600908 C19.9965549,13.2628826 18.1082503,15.3714706 15.77875,15.3737779 Z"
                id="路径"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </i>
);
const ziyuan = (
  <i className="anticon">
    <svg
      t="1656150043826"
      className="icon"
      viewBox="0 0 1183 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2253"
      width="22"
      height="22"
    >
      <g fill="#979797" stroke="#979797">
        <path
          d="M1135.832378 200.691046a107.278118 107.278118 0 0 0-77.32121-33.144891h-251.192726C783.484483 79.648942 703.784938 16.648349 614.875667 16.648349H122.155367c-59.205377 0-107.429927 48.578771-107.429927 108.340779v773.616921c0 58.699348 49.186005 108.340779 107.429927 108.340778h936.355801c59.205377 0 107.379324-48.578771 107.379324-108.340778V277.152006a104.950385 104.950385 0 0 0-30.058114-76.46096z m-433.869144-31.323187H112.287804v-41.696778c0-5.313303 5.414509-9.867563 9.867563-9.867563h491.809448a100.244317 100.244317 0 0 1 87.998419 51.564341z m368.237201 121.042103V869.357581h-1.821704v15.585688c0 12.549516-10.980826 24.390591-22.61949 24.390591H136.678395c-12.44831 0-22.568887-10.930223-22.568887-24.390591V266.87962h934.432892c11.537458 0 21.658035 10.930223 21.658035 23.530342z"
          p-id="2254"
        />
      </g>
    </svg>
  </i>
);
function menuData(teamName, regionName, appID, permissionsInfo) {
  const appPermissions = roleUtil.querySpecifiedPermissionsInfo(
    permissionsInfo,
    'queryAppInfo'
  );

  const control = roleUtil.queryControlInfo(permissionsInfo, 'describe');
  const isAppConfigGroup = roleUtil.queryAppConfigGroupInfo(
    permissionsInfo,
    'describe'
  );
  const { isShare, isBackup, isUpgrade } = appPermissions;
  const menuArr = [
    {
      name: formatMessage({ id: 'menu.app.dashboard' }),
      icon: 'dashboard',
      path: `team/${teamName}/region/${regionName}/apps/${appID}`,
      authority: ['admin', 'user']
    }
  ];

  function addMenuArr(obj) {
    menuArr.push(obj);
  }

  if (isShare) {
    addMenuArr({
      name: formatMessage({ id: 'menu.app.publish' }),
      icon: publishIcon,
      path: `team/${teamName}/region/${regionName}/apps/${appID}/publish`,
      authority: ['admin', 'user']
    });
  }

  if (isBackup) {
    addMenuArr({
      name: formatMessage({ id: 'menu.app.backup' }),
      icon: backupIcon,
      path: `team/${teamName}/region/${regionName}/apps/${appID}/backup`,
      authority: ['admin', 'user']
    });
  }
  if (control) {
    addMenuArr({
      name: formatMessage({ id: 'menu.app.gateway' }),
      icon: 'gateway',
      path: `team/${teamName}/region/${regionName}/apps/${appID}/gateway`,
      authority: ['admin', 'user']
    });
  }
  if (isUpgrade) {
    addMenuArr({
      name: formatMessage({ id: 'menu.app.upgrade' }),
      icon: upgradeIcon,
      path: `team/${teamName}/region/${regionName}/apps/${appID}/upgrade`,
      authority: ['admin', 'user']
    });
  }
  if (isAppConfigGroup) {
    addMenuArr({
      name: formatMessage({ id: 'menu.app.configgroups' }),
      icon: 'setting',
      path: `team/${teamName}/region/${regionName}/apps/${appID}/configgroups`,
      authority: ['admin', 'user']
    });
  }
  addMenuArr({
    name: formatMessage({ id: 'menu.app.k8s' }),
    icon: ziyuan,
    path: `team/${teamName}/region/${regionName}/apps/${appID}/resource`,
    authority: ['admin', 'user']
  });
  return menuArr;
}

function formatter(data, parentPath = '', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    };
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      );
    }
    return result;
  });
}

export const getAppMenuData = (
  teamName,
  regionName,
  appID,
  permissionsInfo
) => {
  const menus = formatter(
    menuData(teamName, regionName, appID, permissionsInfo)
  );
  return menus;
};
